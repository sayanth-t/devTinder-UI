import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import axios from 'axios';
import { addUser } from '../utils/userSlice';

const ProfileTop = ({ user }) => {
  const connections = useSelector((state) => state.connections);
  const connectionsCount = useMemo(() => connections.length, [connections]);
  const [avatarURL, setAvatarURL] = useState(user.avatarURL);

  const dispatch = useDispatch()

  const handleAvatarChange = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = async () => {
        setAvatarURL(reader.result);
        await axios.post(
          'http://localhost:3000/profile/avatar/edit',
          { avatarURL: reader.result },
          { withCredentials: true }
        );

        dispatch(addUser(reader.result));
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Stats Section */}
      <div className="grid grid-cols-3 text-center order-last md:order-first mt-32 md:mt-0">
        <div>
          <Link to={'/connections'}>
            <p className="font-bold text-gray-700 text-xl">
              {connectionsCount}
            </p>
            <p className="text-gray-400">Connections</p>
          </Link>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="relative">
        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center border-4 border-white dark:border-gray-800 ">
          <img
            src={avatarURL}
            alt="user avatar"
            className="object-cover w-full h-full rounded-full transition-transform duration-300 hover:scale-105"
          />

          {/* for edit profile image */}
          <input
            type="file"
            id="avatar-upload"
            className="hidden"
            accept="image/*"
            onChange={handleAvatarChange}
          />
          <label
            htmlFor="avatar-upload"
            className={`
                      absolute bottom-0 right-0 
                      bg-base-content hover:scale-105
                      p-2 rounded-full cursor-pointer 
                      transition-all duration-200
                      animate-pulse 
                    `}
          >
            <Camera className="w-5 h-5 text-base-200" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
