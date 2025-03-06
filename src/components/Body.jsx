import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch  } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
  const naviagate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  
  const protectedRoutes = ['/','/profile', '/feed', '/connections', '/requests'];

  // for fetching logged user
  const fetchUser = async () => {
   
    try {
      const res = await axios.get('http://localhost:3000/profile/view', {
        withCredentials: true,
      });

      dispatch(addUser(res.data.message));

      naviagate('/feed');
    } catch (err) {
      // user only navigate to login when error 401 happens => this find from postman . make profile get api without login
      if (err.status === 401) {
        naviagate('/login');
      }
      console.log('user token is not found !!!!', err.message);
    }
  };

  useEffect(() => {
    if(protectedRoutes.includes(location.pathname)){
        fetchUser();
    }
  },[]);

  return (
    <div className="lg:h-screen ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
