import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { CheckCircle } from 'lucide-react';

function PaymentSuccess() {

  const [searchParams] = useSearchParams() ;
  const sessionId = searchParams.get("session_id") ;

  const verifyPayment = async ()=> {
    try {
      const res = await axios.post("http://localhost:3000/subscription/verify",{sessionId},{withCredentials:true}) ;

      console.log('response -- ', res );
    } catch (err) { 
      console.log(err.message)
    }
  }

  useEffect(()=>{
    if(sessionId){
      verifyPayment()
    }
  },[sessionId])

  console.log('Session ID -- ', sessionId ) ;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 animate-pulse mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-4">
          Thank you for subscribing to DevTinder Pro. Your transaction was successful.
        </p>

        {sessionId && (
          <div className="bg-gray-100 text-gray-700 rounded-lg p-2 text-sm break-all">
            <strong>Session ID:</strong> {sessionId}
          </div>
        )}

        <a
          href="/"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
  
}

export default PaymentSuccess