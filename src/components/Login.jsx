import { useState } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

// Import toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailID, setEmailID] = useState('asarpp123@gmail.com');
  const [password, setPassword] = useState('asArpp@123');

  const dispatch = useDispatch() ;

  const navigate = useNavigate() 


  const handleLogin = async () => {
    try {
      const res = await axios.post(
        'http://localhost:3000/login',
        {
          emailID,
          password,
        },
        { withCredentials : true } 
      );

      dispatch(addUser(res.data.user)) ;
      
      navigate('/feed')

    } catch (error) {
      if(error.response) {
        toast.error(error.response.data.message || "Login Failed", {
          position: "top-right",
          autoClose: 3000,
        });
      }
      else{
        console.log("Login failed:", error.message);
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-6 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Sign in to your account
          </h1>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={emailID}
                onChange={(e) => {
                  setEmailID(e.target.value);
                }}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in
            </button>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                or
              </div>
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Don’t have an account yet?{' '}
            <a
              href="/signup"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Login;
