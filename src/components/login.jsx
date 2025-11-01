import axios from "axios";
import {useState} from 'react'; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";


const Login=()=>{
    const [emailID,setEmailId]=useState("kishansingh9006866@gmail.com");
    const [password,setPassword]=useState("Pwioi@230101005");
    const [firstName,setfirstName]=useState("");
    const[lastName,setlastName]=useState("");
    const[isLoginForm,setIsLoginForm]=useState(false);

    const[error,setError]=useState("");
    const dispatch=useDispatch(); //UseDispatch trigger state updates in the Redux store.
    const navigate=useNavigate();
    

    const handleLogin=async()=>{
        
        try{
            const res= await axios.post(BASE_URL+"/login", //PostCall i am doing..from backend.
             {emailID,password},
            {withCredentials:true} // To bring the cookie in the application of network
            );
             console.log(res.data);
             dispatch(addUser(res.data)); // Redux toolkit has used here.
             return navigate("/"); // Once if you have login then gi to the feed Page..
        }
           
        catch(err){
            setError(err?.response?.data?.message || "Something went wrong...");             
                  }}
    const handleSignUp= async()=>{
        try{
            const res=await axios.post(BASE_URL+"/signup",//PostCall  i am doing from backend
                {firstName,lastName,emailID,password},
                {withCredentials:true}
            );
            disPatch(addUser(res.data.data));
            return navigate("/profile");
        }
        catch(error){
            console.log(error.message)
        }
    }

    return(
        <>
        <div className="flex justify-center mt-6">
            <div className="card bg-base-300 w-96 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title justify-center">{isLoginForm ?"Login":"Signup"}</h2>
                     <fieldset className="fieldset">

             {  !isLoginForm && <div><legend className="fieldset-legend">firstName </legend>
                        <input value={firstName} type="text" className="input" placeholder="Kishan tell everyone to enter firstName here" 
                          
                          onChange={(e)=>setfirstName(e.target.value)}
                        />

                        <legend className="fieldset-legend">LastName </legend>
                        <input value={lastName} type="text" className="input" placeholder="Kishan tell everyone to enter lastName here" 
                          
                          onChange={(e)=>setlastName(e.target.value)}
                        />  
                        </div> } 

                        <legend className="fieldset-legend">Email Id:{emailID}</legend>
                        <input type="text" value={emailID} className="input" placeholder="Kishan tell everyone to enter Email here"
                            onChange={(e)=>setEmailId(e.target.value)}
                        />

                        <legend className="fieldset-legend">Password:{password} </legend>
                        <input value={password} type="password" className="input" placeholder="Kishan tell everyone to enter Password here" 
                         
                          onChange={(e)=>setPassword(e.target.value)}
                        />
                        
                        
                     <p className="text-red-500">{error}</p>
                    </fieldset>
                        <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={isLoginForm? handleLogin:handleSignUp}>
                            {isLoginForm?"Login":"SignUP"}</button>
                        </div>
                        <p className=" m-auto cursor-pointer text-blue-600 hover:underline hover:text-blue-800 transition-colors" onClick={()=>setIsLoginForm((value)=>!value)}>
                            {
                                isLoginForm ? "New User! SignUp here" :"ExistingUser ? Login here"
                            }
                        </p>
                    </div>
            </div>
        </div>
     
        </>
    )
}
export default Login;

// All commited