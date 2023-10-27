import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector(selectUser)

  const handelSignOut = () => {
    if(confirm('Are you sure you want to SignOut')){
      signOut(auth).then(() => {
        navigate('/')
        window.location.reload();
      }).catch((error) => {

      });
    }
  }

  return (
    <div>
      <div className="bg-transparent min-w-full fixed top-0 left-0 z-50">
        <div className="flex justify-between container mx-auto transition-all duration-[0.5s] ease-in">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix/img"
            className="w-20 xl:w-28 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-items-center items-center">
        <h1 className="text-3xl font-normal capitalize mb-5">who is watching?</h1>
        <img 
          src="https://website-assets.atlan.com/img/data-analyst-persona.svg" 
          alt="profile/img" 
          className="w-24 rounded-md" 
        />
        <h4 className="mb-7 mt-1 text-sm">{user.email}</h4>
        <button className="bg-[#E50914] px-5 py-2 rounded-sm" onClick={handelSignOut}>SignOut</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
