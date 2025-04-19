import { loadStripe } from "@stripe/stripe-js";
import { plans } from "../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

const stripePromise = loadStripe( publishableKey ) ;
 
const SubscriptionPlan = ({setShowPlans}) => {

  const navigate = useNavigate()

    const handleSelectPlan = async (priceId) => {
      
      try {
        console.log('Plaane ID -- ', priceId )
        const res = await axios.post('http://localhost:3000/subscription/create',{ priceId } , { withCredentials : true }) ;

        const {sessionId} = await res.data

        // redirect to checkout
        const stripe = await stripePromise 
        const {error} = await stripe.redirectToCheckout({ sessionId  })
        if(error){
          console.log('redirecting Error ', error )
          navigate("/profile")
        }
        
      } catch (err) {
        console.log(err.message)
      }
    }


    return (
        <div className="fixed inset-0  bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 shadow-2xl w-[90%] max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Choose Your Plan
          </h2>

          <div className="flex flex-col gap-4">

            { 
              plans.map((plane)=>(
                <div onClick={()=> handleSelectPlan(plane.priceId) }
                  className={`cursor-pointer border ${plane.duration === "Monthly" ? 'border-pink-500 text-pink-600 ' :   'border-purple-500 text-purple-600 '} px-6 py-4 rounded-lg shadow hover:shadow-lg transition-transform hover:scale-105 text-center`}
                >
                  <h3 className="text-lg font-semibold">{plane.duration}</h3>
                  <p className="text-sm">{plane.price +" " +  plane.duration}</p>
                </div>
              ))
            }

          </div>

          {/* Close Button */}
          <button
            onClick={() => setShowPlans(false)}
            className="mt-6 w-full text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Cancel
          </button>
        </div>
      </div>
    )
}

export default SubscriptionPlan;
