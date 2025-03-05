import { useEffect, useMemo, useState  } from 'react';
import { Link } from 'react-router-dom';
import { addConnections } from '../utils/connectionsSlice';
import EditProfile from './EditProfile';
import {useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles
import axios from 'axios';


const Profile = () => {

  const handleToast = (type) => {
    if (type === 'success') {
      toast.success('Profile Updated', {
        position: 'top-right',
        autoClose: 3000,
      });
    } else {
      toast.error('invalid credentials !', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  const dispatch = useDispatch()

  // for fetching connections
  const fetchConnections = async () => {
    try {
      const res = await axios.get(
        'http://localhost:3000/user/request/connections',
        { withCredentials: true }
      );

      dispatch(addConnections(res.data.connections));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(()=>{
    fetchConnections();
  },[])

  const user = useSelector((state) => state.user );

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastname] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [emailID, setEmailID] = useState(user.emailID);
  const [avatarURL, setAvatarURL] = useState(user.avatarURL);
  const [about, setAbout] = useState(user.about);

  const connections = useSelector( (state)=> state.connections )

  const connectionsCount = useMemo(() => connections.length, [connections])

  return (
    <section className="min-h-screen flex justify-center items-center">
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
            <EditProfile
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastname={setLastname}
              age={age}
              setAge={setAge}
              handleToast={handleToast}
              about={about}
              setAbout={setAbout}
            />
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Profile;
