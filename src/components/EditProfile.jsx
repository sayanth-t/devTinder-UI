import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({firstName,setFirstName,lastName,setLastname,age,setAge,handleToast}) => {

  const dispatch = useDispatch()

    const handleProfileUpdate = async (e) => {
       try {
        e.preventDefault() ;

        const res = await axios.post("http://localhost:3000/profile/edit",{ firstName , lastName , age } , { withCredentials:true , headers: { "Content-Type": "application/json" }  }) ;
        
        dispatch(addUser(res?.data?.userData)) ;

        handleToast() ;
       } catch (error) {
        console.log(error.message)
       }
    }
    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md lg:min-w-4xl md:min-w-lg  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Edit Profile
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleProfileUpdate}>
            {/* first name */}
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="first name"
                required
              />
            </div>

            {/* lastName */}
            <div>
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="last name"
                required
              />
            </div>

            {/* age */}
            <div>
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Age
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                name="age"
                id="age"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="age"
                required
              />
            </div>

       

            <button
              type="submit"
              
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    );
}

export default EditProfile;
