
import { useDispatch } from "react-redux";
import axios from "axios";
import {BASE_URL} from "../utils/constants";

const UserCard = ({user})=>{
    const {_id,firstName,lastName,photoUrl,age,about,gender}=user;
    console.log(user);

    const dispatch = useDispatch();

    const handleSendRequest= async (status,userId)=>{
      try{
        const res= await axios.post(BASE_URL+ status+ "/" + userId,
        {},
        {withCredentials:true});
       dispatch(removeUserFromFeed(userId))
      }
      catch(error){
        console.log(error.message);
      }
    }
    return(
        <div className="card bg-base-300 w-96 shadow-sm ml-8">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        //  <image src={user.photoUrl}>
   
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title {firstName + "" +lastName}</h2>
    <p>{about}</p>
    {age && gender && <p>{age + ","+gender}</p>}
    
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
       <button className="btn btn-primary" onClick={()=>handleSendRequest("interested",_id)}>Send Request</button>
    </div>
  </div>
</div>
    )
}
export default UserCard;