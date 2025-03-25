import axios from "axios";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupEmailVerify = () => {
  const user = useSelector((state)=> state.user )
  const [otp, setOtp] = useState( new Array(6).fill("") );
  const inputRef = useRef([]);
  const navigate = useNavigate()

  const handleChange = (index, e) => {
    const value = e.target.value;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if ( value && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if ( e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus() ;
    } 
  };

  const handleEmailVerify = async () => {
    try {
      if(user){
        const res = await axios.post(`http://localhost:3000/signup/verifyEmail/${user._id}`,{ otp : otp.join("") },{withCredentials:true}) ;
        if(!res.data.verification){
          throw new Error(res.data.message)
        }
        navigate("/signup/password") ;
      }
    } catch (err) {
      
      toast.error( err?.message || "Something went Wrong!!" , {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  
  };

  return (
    <section className="dev-bg dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          Verify Your Email
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
          Enter the 6-digit OTP sent to your email
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-3 mt-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRef.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
              className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 bg-gray-50 rounded-lg shadow-md transition-all focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              maxLength="1"
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleEmailVerify}
          className="mt-6 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Verify OTP
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignupEmailVerify;
