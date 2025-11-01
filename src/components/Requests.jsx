import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { useEffect,useState } from "react";

const Requests=()=>{
    const disPatch=useDispatch();
    const requests=useSelector((store)=>store.requests);

    const [showButtons,setShowButtons]=useState(true);

    const reviewRequests= async (status,_id)=>{
        try{
            const res=axios.post(BASE_URL + "/request/review/" + status + "/"+_id,
                {},
                {withCredentials:true}
            );
            dispatch(removeRequest(_id));// Here i am pressing accepting request after that the profile diaaspear or lost.
        }
        catch(error){
            console.log(error.message);
        }
    }

    const fetchRequest= async()=>{
        try{
            const res= await axios.get(BASE_URL+"/user/request/received",
                {withCredentials:true,}
            )
            dispatch(addRequest(res.data.data))
        }
        catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        fetchRequest();

    },[])
    if(!requests) return;
    if(requests.length===0) return <h1 className="flex justify-center my-10">No Request found...</h1>
  return(
    <>
    <h1 className="flex flex-col justify-center items-center my-10 font-bold ">Connection Request</h1>

    {requests.map((request)=>{
        const {_id,firstName,lastName,photoUrl,age,gender,about}=request.fromUserId;
        return(
        <div
        key={_id}
        className="flex justify-between m-4 p-4 rounded-lg bg-base-300 w-2/3">
            <div><img alt="photo" className="w-20 h-20 rounded-full" src={photoUrl}/></div>
            <div> {connection.firstName}
                <div className="text-left mx-4">
            <h2 className="font-bold">{firstName + " " +lastName}</h2>
            {age && gender && <p>{age+ ","+gender}</p>}
            <p>{About}</p>
            </div>
            </div>
            <div>
                <button className="btn btn-neutral mx-2" onClick={()=>reviewRequest("rejected",request._id)}>Reject</button>
                 <button className="btn btn-primary mx-2" onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
            </div>
           
            
        </div>
    )})}
    </>

  );
};



export default Requests;