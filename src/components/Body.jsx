import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Body = () => {

    const naviagate = useNavigate()

    const dispatch = useDispatch()


    const fetchUser =  async() => {
        try {

            const res = await axios.get( 'http://localhost:3000/profile/view' ,
                { withCredentials : true }
            )
            
            dispatch(addUser(res.data.message))
            
        } catch (err) {
            // user only navigate to login when error 401 happens => this find from postman . make profile get api without login
            if(err.status === 401 ){
                naviagate('/login')
            }
            console.log(err.message)
            
        }
    }

    useEffect(()=>{
        fetchUser()
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
