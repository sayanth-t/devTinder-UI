import { useState } from 'react';

import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles

const Profile = () => {

  const handleToast = () => {
    toast.success(
       'Profile Updated',
      {
        position: 'top-right',
        autoClose: 3000,
      }
    );
  }

  const user = useSelector((state)=> state.user ) ;

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastname] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [emailID, setEmailID] = useState(user.emailID);
  const [avatarURL, setAvatarURL] = useState(user.avatarURL);

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="p-16 lg:max-w-6xl md:max-w-5xl sm:max-w-4xl">
        <div className="p-8 bg-white shadow-lg rounded-lg mt-24">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Stats Section */}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-32 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">22</p>
                <p className="text-gray-400">Friends</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">10</p>
                <p className="text-gray-400">Photos</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
                <p className="text-gray-400">Comments</p>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns={avatarURL}
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
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
            <p className="mt-2 text-gray-500">University of Computer Science</p>
          </div>

          {/* Bio Section */}
          <div className="mt-12 flex flex-col justify-center">
            
               <EditProfile firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastname={setLastname} age={age} setAge={setAge} handleToast={handleToast}/>
         
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Profile;
