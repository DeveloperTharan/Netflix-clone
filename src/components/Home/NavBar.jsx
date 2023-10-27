import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {

  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate()

  const handelNavBar = () => {
    if(window.scrollY > 80){
      setShowNav(true);
    }
    else{
      setShowNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handelNavBar);

    return () => window.removeEventListener("scroll", handelNavBar);
  },[handelNavBar]);

  return (
    <div className={`${showNav && 'bg-black '} min-w-full h-16 fixed top-0 left-0 z-50`}>
      <div 
        className="flex justify-between container mx-auto transition-all duration-[0.5s] ease-in"
      >
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix/img"
          className="w-20 xl:w-28 cursor-pointer"
          onClick={() => {navigate('/')}}
        />

        <img
          src="https://website-assets.atlan.com/img/data-analyst-persona.svg"
          alt="user/img"
          className="w-7 xl:w-10 cursor-pointer"
          onClick={() => {navigate("Profile")}}
        />
      </div>
    </div>
  );
}

export default NavBar;
