import React, { useState } from "react";
import SignIn from "./SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div>
      <div className="absolute w-full h-full bg-gradient-to-tl from-black/80" />
      <div className="absolute w-full h-full bg-gradient-to-br from-black/80" />
      <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="background/img"
        className="w-full h-[100vh] object-cover object-left-top"
      />
      {signIn ? (
        <SignIn />
      ) : (
        <div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="text-center items-center">
              <h1
                className="text-[15px] md:text-[20px] lg:text-[30px] 2xl:text-[40px] 5xl:text-[60px] 
                font-bold capitalize whitespace-nowrap -mt-10"
              >
                unlimited films, TV programmes and more
              </h1>
              <h4
                className="text-[12px] md:text-[14px] lg:text-[17px] 2xl:text-[22px] 5xl:text-[28px] 
                font-thin capitalize"
              >
                watch anywhere. cancel at any time.
              </h4>
              <h6
                className="text-[10px] lg:text-[12px] 2xl:text-[14px] 5xl:text-[16px] capitalize mt-2 
                lg:mt-5 mb-2"
              >
                ready to watch? enter your email to create or restart your
                membership.
              </h6>
              <input
                type="email"
                placeholder="Email address"
                id="forEmail"
                className="px-[10px] md:px-4 py-[3px] md:py-[6px] 5xl:px-8 5xl:py-[12px] w-1/2
                outline-none text-black"
                required
              />
              <label
                htmlFor="forEmail"
                className="bg-[#E50914] py-[6px] md:py-[9px] px-[4px] md:px-[6px] 5xl:px-[10px] 
                5xl:py-[16px] text-sm cursor-pointer"
                onClick={() => setSignIn(true)}
              >
                GET STARTED
              </label>
            </div>
          </div>
          <div className="bg-transparent min-w-full fixed top-0 left-0 z-50">
            <div className="flex justify-between container mx-auto transition-all duration-[0.5s] ease-in">
              <img
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="netflix/img"
                className="w-20 xl:w-28 cursor-pointer"
              />
              <button
                className="bg-[#E50914] text-[12px] px-2 lg:px-4 h-6 lg:h-8 mt-2 rounded-sm"
                onClick={() => setSignIn(true)}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
