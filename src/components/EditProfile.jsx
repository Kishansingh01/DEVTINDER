// import { useState } from "react";
// import { useDispatch,useSelector } from "react-redux";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { addUser } from "../utils/userSlice";
// import UserCard from "./userCard";

// const EditProfile=()=>{
       
//     const user=useSelector((store)=>store.user);

//     const [firstName,setfirstName]=useState(user.firstName);
//     const [lastName,setLastName]=useState(user.lastName);
//     const [age,setAge]=useState(user.age);
//     const [about,setAbout]=useState(user.about);
//     const[error,setError]=useState("");
//     const [showToast,setShowToast]=useState(false);
    
//     const dispatch=useDispatch();

//     const saveProfile= async()=>{
//          setError("");
//         try{
//             const res= await axios.patch(BASE_URL+"/profile/edit",{
//                 firstName,
//                 lastName,
//                 photoUrl,
//                 age,
//                 gender,
//                 about,},
//                   {withCredentials:true}
//         );
//            dispatch(addUser(res.data.data));
//            setShowToast(true)

//            setTimeout(()=>{
//             setShowToast(false);
//            },3000);
//             alert(res.data.message || "Profile updated successfully!");
//         }
       
//         catch(err){
//             setError(err.message);
//         }
//     };

//         return(  
//         <>
//         <div className="flex justify-center mt-6">
//             <div className="card bg-base-300 w-96 shadow-sm">
//                     <div className="card-body">
//                         <h2 className="card-title justify-center">Edit Profile</h2>
//                      <fieldset className="fieldset">

//                         <legend className="fieldset-legend">FirstName</legend>
//                         <input type="text" value={firstName} className="input" placeholder="Kishan tell everyone to enter Email here"
//                             onChange={(e)=>setfirstName(e.target.value)}
//                         />

//                         <legend className="fieldset-legend">LastName</legend>
//                         <input value={password} type="text" className="input" placeholder="Kishan tell everyone to enter Password here"
//                            onChange={(e)=>setLastName(e.target.value)}
//                         />

//                           <legend className="fieldset-legend">Age</legend>
//                         <input value={age} type="text" className="input" placeholder="Kishan tell everyone to enter Age here"
//                           onChange={(e)=>setAge(e.target.value)}
//                         />

//                            <legend className="fieldset-legend">Gender</legend>
//                         <input value={Gender} type="text" className="input" placeholder="Kishan tell everyone to enter Gender here" 
                         
//                           onChange={(e)=>setGender(e.target.value)}
//                         />
//                      <p className="text-red-500">{error}</p>
//                     </fieldset>
//                         <div className="card-actions justify-center">
//                         <button className="btn btn-primary" onClick={saveProfile} >Save Profile</button>
//                         </div>
//                     </div>
//             </div>
//         </div>
//          <UserCard user={{firstName,lastName,photoUrl,age,gender,about}}/>

//          {showToast && (<div className="toast toast-center">
//             <div className="alert alert-info">
//                 <span>New mail arrived.</span>
//             </div>
//             <div className="alert alert-success">
//                 <span>Message sent successfully.</span>
//             </div>
//             </div>)}
//         </>
//               )
// }
// export default EditProfile;


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import UserCard from "./userCard";

const EditProfile = () => {
    const user = useSelector((store) => store.user);

    // Initialize state safely using optional chaining
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [age, setAge] = useState(user?.age || "");
    const [about, setAbout] = useState(user?.about || "");
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
    const [gender, setGender] = useState(user?.gender || "");
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);

    const dispatch = useDispatch();

    const saveProfile = async () => {
        try {
            setError(""); // Clear previous error
            const res = await axios.patch(
                BASE_URL+"/profile/edit",
                // `${BASE_URL}/profile/edit`,
                { firstName, lastName, photoUrl, age, gender, about },
                { withCredentials: true }
            );
            dispatch(addUser(res.data.data));
            setShowToast(true);

            setTimeout(() => setShowToast(false), 3000);
            alert(res.data.message || "Profile updated successfully!");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className="flex justify-center mt-6">
                <div className="card bg-base-300 w-96 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Edit Profile</h2>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">First Name</legend>
                            <input
                                type="text"
                                value={firstName}
                                className="input"
                                placeholder="Enter First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />

                            <legend className="fieldset-legend">Last Name</legend>
                            <input
                                type="text"
                                value={lastName}
                                className="input"
                                placeholder="Enter Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />

                            <legend className="fieldset-legend">Age</legend>
                            <input
                                type="text"
                                value={age}
                                className="input"
                                placeholder="Enter Age"
                                onChange={(e) => setAge(e.target.value)}
                            />

                            <legend className="fieldset-legend">Gender</legend>
                            <input
                                type="text"
                                value={gender}
                                className="input"
                                placeholder="Enter Gender"
                                onChange={(e) => setGender(e.target.value)}
                            />

                            <legend className="fieldset-legend">About</legend>
                            <input
                                type="text"
                                value={about}
                                className="input"
                                placeholder="Write something about yourself"
                                onChange={(e) => setAbout(e.target.value)}
                            />

                            <legend className="fieldset-legend">Photo URL</legend>
                            <input
                                type="text"
                                value={photoUrl}
                                className="input"
                                placeholder="Enter Photo URL"
                                onChange={(e) => setPhotoUrl(e.target.value)}
                            />

                            <p className="text-red-500">{error}</p>
                        </fieldset>

                        <div className="card-actions justify-center">
                            <button className="btn btn-primary" onClick={saveProfile}>
                                Save Profile
                            </button>
                        </div>
                    </div>
                    
                </div>
                 <label>
                            <UserCard 
                user={{ firstName, lastName, photoUrl, age, gender, about }}
                                     />
                        </label>
            </div>

            {showToast && (
                <div className="toast toast-center">
                    <div className="alert alert-success">
                        <span>Profile updated successfully!</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditProfile;
