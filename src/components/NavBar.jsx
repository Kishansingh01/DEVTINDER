import {useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar=()=>{
  const user= useSelector((store)=>store.user) // ReduxToolkit i am subscribing
  const dispatch=useDispatch(); 
  const navigate=useNavigate();
  console.log(user);

  const handleLogout=async()=>{
    try{
      await axios.post(BASE_URL+"/logout",{},
        {withCredentials:true}
      )
       dispatch(removeUser())
       return navigate("/login")

    }
    catch(err){
  console.error("Logout Failed:", err.response ? err.response.data : err.message);

    }
  }

    return(
        <div>
              <div className="navbar bg-green-500 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>  
  <div className="flex gap-2 mr-8 ">
   {!user && (
   <div className="dropdown dropdown-end flex  ">
      <p>Welcome Kishan</p>
    {/* <p>Welcome.{user.firstName}</p> */}
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-2">
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

            {/* <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl} /> */}
             
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link to="/Connections">Connections</Link>
          </li>
           <li>
          <Link to="/requests">Request</Link>
          </li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>)}
  </div>
</div>
        </div>
    )
}

export default NavBar;