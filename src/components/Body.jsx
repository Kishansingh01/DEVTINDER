import { BASE_URL } from '../utils/constants';
import NavBar from './NavBar';
import Footer from './footer';
import { Outlet,useNavigate } from "react-router-dom";
import {addUser} from "../utils/userSlice";
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const Body=()=>{
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const userData=useSelector((store)=>store.user);

    const fetchUser=async()=>{
        if(userData) return;
    try {   const res= await axios.get(BASE_URL+"/profile/view",
            {withCredentials:true}
        );
        dispatch(addUser(res.data))
    }
        catch(err){
            if(err.status==401){
            navigate("/login") // Means if the token has expired then login or first login then go toprofile or feed
            }
            console.error(err);
        }
    };

    useEffect(()=>{
       // if userdata is not then fetch the user 
              fetchUser();       
    },[]);

    return(
        <>
             <NavBar/>
             <Outlet/>
             <Footer/>
        </>
    )
}
export default Body;