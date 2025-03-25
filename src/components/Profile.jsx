import { useMemo  } from 'react';
import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles


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
 
  const user = useSelector((state) => state.user );

  const connections = useSelector( (state)=> state.connections )

  const connectionsCount = useMemo(() => connections.length, [connections]) ;

  return (
    <section className="min-h-screen flex justify-center items-center">
      {
        user && <EditProfile user={user} connectionsCount={connectionsCount} handleToast={handleToast}/>
      }

      <ToastContainer />
    </section>
  );
};

export default Profile;
