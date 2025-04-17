import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { defaultUser, skills } from '../utils/constants';
import { CiCamera } from 'react-icons/ci';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SkillsAndProfile = () => {
  const [profileImage, setProfileImage] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const user = useSelector((state)=> state.user )
  const naviagate = useNavigate()

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
    console.log(selectedSkills);
  };

  const handleProfileUpdate = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async ()  => {
    try {
        const res = await axios.post(`http://localhost:3000/signup/setupProfile/${user._id}`,{ avatar : profileImage , skills : selectedSkills },{ withCredentials : true }) ;
        if(res?.data?.isProfileUpdates){
            naviagate("/feed")
        }
    } catch (err) {
        console.log(err.message)
    }
  }

  return (
    <section className="dev-bg dark:bg-gray-900 flex items-center justify-center">
      <div className="lg:max-w-3xl">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Complete Your Profile
        </h2>

        {/* Profile Image Upload */}
        <div className="mb-6 flex flex-col items-center">
          <label className="text-white font-medium mb-2">Profile Picture</label>

          <div className="relative w-32 h-32 mx-auto">
            <label htmlFor="profile-upload" className="cursor-pointer block">
              <img
                src={profileImage || defaultUser}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border-2 border-green-500"
              />

              {/* Camera icon overlay */}
              <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow-md">
                <CiCamera className="w-6 " />
              </div>
            </label>

            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleProfileUpdate}
              className="hidden"
            />
          </div>
        </div>

        {/* Skills Selection */}
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">
            Select Your Skills
          </label>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
                  selectedSkills.includes(skill)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-800 border-gray-300'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="mt-4 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Profile
        </button>
      </div>
    </section>
  );
};

export default SkillsAndProfile;
