
import EditProfile from './EditProfile';
import {  useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles
import ProfileDetails from './ProfileDetails';
import ProfileTop from './ProfileTop';

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

  const user = useSelector((state) => state.user);
  
  return (
    <section className="min-h-screen flex justify-center items-center">
      {user && (
        <div className="p-16 lg:max-w-6xl md:max-w-5xl sm:max-w-4xl">
          <div className="p-8 bg-white shadow-lg rounded-lg mt-24">

            {/* Top Section */}
            <ProfileTop user={user}/>

            {/* profile details */}
            <ProfileDetails user={user}/>

            {/* edit profile */}
            <EditProfile user={user} handleToast={handleToast}/>
            
          </div>
        </div>
      )}

      <ToastContainer />
    </section>
  );
};

export default Profile;
