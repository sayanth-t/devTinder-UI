import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { addRequests } from "../utils/requestsSlice";


const Body = () => {

    const naviagate = useNavigate()

    const dispatch = useDispatch() ;

    // for fetching requests
    const fetchRequests = async () => {
        try {

            const res = await axios.get("http://localhost:3000/user/request/recieved",{withCredentials:true}) ;
            dispatch(addRequests( res?.data?.requests ))
        } catch (err) {
            console.log(err.message)
        }
    }

    // for fetching logged user
    const fetchUser =  async() => {
        try {

            const res = await axios.get( 'http://localhost:3000/profile/view' ,
                { withCredentials : true }
            )
            
            dispatch(addUser(res.data.message)) ;

            if(res){
                naviagate("/feed")
            }
            
        } catch (err) {
            // user only navigate to login when error 401 happens => this find from postman . make profile get api without login
            
            console.log(err.message)
            
        }
    }

    useEffect(()=>{
        fetchUser() ,
        fetchRequests()
    }, [] )

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Body;
