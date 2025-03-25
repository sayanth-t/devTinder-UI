import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignupPassword = () => {
     const user = useSelector(state => state.user ) ;
     const navigate = useNavigate()

    const [password,setPassword] = useState("sAyan@123")
    const [confirmPassword,setConfirmPassword] = useState("sAyan@123") ;
    const handelSubmit = async (e) => {
      e.preventDefault();
      try {
        
        if( password !== confirmPassword ) {
          throw new Error("Passwrods are not match!") ;
        }
        if(!user){
          throw new Error("Please try again !")
        }
        const res = await axios.post(`http://localhost:3000/signup/verifyPassword/${user._id}`,{password},{withCredentials:true}) ;

        if(res.data.passwordVerification){
          navigate("/feed") ;
        }
      } catch (err) {
        toast.error( err.message || "Signup failed" ,{
          position: 'top-right',
          autoClose: 3000,
        })
      }
    };
  return (
    <section className="dev-bg dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Set your Password
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
           

              {/* password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              {/* confirm password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              {/* to show passwords are match or not */}
              <div>
                {password !== confirmPassword && (
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-red-500 dark:text-white"
                  >
                    Password are not match
                  </label>
                )}
              </div>

              <button
                type="submit"
                onClick={handelSubmit}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default SignupPassword;
