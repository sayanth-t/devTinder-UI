import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = ({user , connectionsCount , handleToast}) => {

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastname] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [emailID, setEmailID] = useState(user.emailID);
  const [avatarURL, setAvatarURL] = useState(user.avatarURL);
  const [about, setAbout] = useState(user.about);

  const dispatch = useDispatch()

    const handleProfileUpdate = async (e) => {
       try {
        e.preventDefault() ;

        const res = await axios.post("http://localhost:3000/profile/edit",{ firstName , lastName , age , about } , { withCredentials:true , headers: { "Content-Type": "application/json" }  }) ;
        
        dispatch(addUser(res?.data?.userData)) ;

        handleToast("success") ;
       } catch (error) {
        console.log(error.message) 
        handleToast("failed") ;
       }
    }
    return (
      <div className="p-16 lg:max-w-6xl md:max-w-5xl sm:max-w-4xl">
        <div className="p-8 bg-white shadow-lg rounded-lg mt-24">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Stats Section */}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-32 md:mt-0">
              <div>
                <Link to={'/connections'}>
                  <p className="font-bold text-gray-700 text-xl">{ connectionsCount }</p>
                  <p className="text-gray-400">Connections</p>
                </Link>
              </div>
              {/* <div>
                <p className="font-bold text-gray-700 text-xl">10</p>
                <p className="text-gray-400">Photos</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
                <p className="text-gray-400">Comments</p>
              </div> */}
            </div>

            {/* Profile Picture */}
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center border-4 border-white dark:border-gray-800 overflow-hidden">
                <img
                  src={avatarURL}
                  alt="user avatar"
                  className="object-cover w-full h-full rounded-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              {firstName + ' ' + lastName}
              <span className="font-light text-gray-500">{',' + age}</span>
            </h1>
            <p className="font-light text-gray-600 mt-3">{emailID}</p>
            <p className="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>
            <p className="mt-2 text-gray-500">{about && about}</p>
          </div>

          {/* Bio Section */}
          <div className="mt-12 flex flex-col justify-center">
            
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

            {/* About */}
            <div>
              <label
                htmlFor="age"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                About
              </label>
              <input
                type="text"
                value={ about ? about : "" }
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                name="age"
                id="age"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="about yourself"
               
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
          </div>
        </div>
      </div>
        
    );
}

export default EditProfile;
