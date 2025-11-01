import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../utils/connectionSlice";
import { useSelector,useDispatch } from "react-redux";

const Connections=()=>{

    const connections=useSelector((store)=>store.connections);
    const dispatch=useDispatch();

    const fetchConnections = async()=>{
         console.log("Connections has logged here");
        try{
            const res= await axios.get(BASE_URL+"/user/connections",{
                withCredentials:true,
            });
            // console.log(res.data.data);
            console.log("Connections has logged");
            dispatch(addConnections(res.data.data));

        }
        catch(err){
            console.log("Error object:",err?.message);
        }
    }
    useEffect(()=>{
        <div>Hellllllo</div>
        fetchConnections();
    },[]);

    if(!connections) return;
    if(connections.length===0) return <h1>No Connection found...</h1>
  return(
    <> key={_id}
    <h1 className="flex flex-col justify-center my-10 font-bold ">Connections</h1>

    {connections.map((connection)=>{
        const {_id,firstName,lastName,photoUrl,age,gender,about}=connection;
        return(
        <div className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2">
            <div><img alt="photo" className="w-20 h-20 rounded-full object.contain" src={photoUrl}/></div>
            <div> {connection.firstName}
                <div className="text-left mx-4">
            <h2 className="font-bold">{firstName + " " +lastName}</h2>
            {age && gender && <p>{age+ ","+gender}</p>}
            <p>About</p>
                </div>
            </div>
           
            <p>Aboutt</p>
        </div>
    )})}
    </>

  );
}
export default Connections;