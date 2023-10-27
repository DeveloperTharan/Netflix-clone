import React, { useState } from "react";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

function signIn() {
  const [signInType, setsignInType] = useState("signIn");
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handelCredentials = (e) => {
    setSuccess("");
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handelSignUp = (e) => {
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess(`successfully SignUp let's go to SignIn`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handelSignIn = (e) => {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        /* console.log(user); */
        setSuccess(`successfully SignIn`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handelPasswordReset = () => {
    const email = prompt('please enter your Email');
    sendPasswordResetEmail(auth, email);
    alert('Check your inbox Password Reset instructions sended.');
  }

  return (
    <div>
      <div className="bg-transparent min-w-full fixed top-0 left-0 z-50">
        <div className="flex justify-between container mx-auto transition-all duration-[0.5s] ease-in">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix/img"
            className="w-20 xl:w-28 cursor-pointer"
          />
          {signInType == "signIn" ? (
            <button
              className={`bg-[#E50914] text-[12px] px-2 lg:px-4 h-6 lg:h-8 mt-2 rounded-sm 
                        ${signInType == "signup" ? "selected" : ""}`}
              onClick={() => setsignInType("signup")}
            >
              Sign Up
            </button>
          ) : (
            <button
              className={`bg-[#E50914] text-[12px] px-2 lg:px-4 h-6 lg:h-8 mt-2 rounded-sm 
                ${signInType == "signup" ? "selected" : ""}`}
              onClick={() => setsignInType("signIn")}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className=" w-max h-max bg-gradient-to-b from-black">
          <div className="w-max h-max bg-gradient-to-t from-black">
            <div className="p-10 lg:p-14">
              {signInType == "signIn" ? (
                <h4
                  className={`text-2xl font-semibold mb-5 ${
                    signInType == "signIn"
                  }`}
                >
                  Sign In
                </h4>
              ) : (
                <h4
                  className={`text-2xl font-semibold mb-5 ${
                    signInType == "signIn"
                  }`}
                >
                  Sign Up
                </h4>
              )}
              <div className="text-center items-center">
                <div className="login-type"></div>
                <form className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="px-2 py-[6px] mb-4 outline-none text-black"
                    required
                    onChange={(e) => {
                      handelCredentials(e);
                    }}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="px-2 py-[6px] mb-7 outline-none text-black"
                    required
                    onChange={(e) => {
                      handelCredentials(e);
                    }}
                  />
                  {signInType == "signIn" ? (
                    <button
                      className="bg-[#E50914] grid py-2 mb-4"
                      onClick={(e) => {
                        handelSignIn(e);
                      }}
                    >
                      Sign In
                    </button>
                  ) : (
                    <button
                      className="bg-[#E50914] grid py-2 mb-4"
                      onClick={(e) => {
                        handelSignUp(e);
                      }}
                    >
                      Sign Up
                    </button>
                  )}
                  {signInType == "signIn" ? (
                    <div>
                      <p 
                        className="text-[12px] mb-2 hover:underline capitalize text-blue-600 cursor-pointer 
                        text-start"
                        onClick={handelPasswordReset}
                      >
                        forget password?
                      </p>
                      <h4 className="flex gap-1">
                        <span className="text-sm text-gray-600">
                          New to Netflix?.
                        </span>
                        <span
                          className="text-[12px] hover:underline cursor-pointer text-blue-600"
                          onClick={() => setsignInType("signup")}
                        >
                          Sign Up Now.
                        </span>
                      </h4>
                    </div>
                  ) : (
                    <h4 className="flex gap-1">
                      <span className="text-sm text-gray-600">
                        Already have Netflix?.
                      </span>
                      <span
                        className="text-[12px] hover:underline cursor-pointer text-blue-600"
                        onClick={() => setsignInType("signIn")}
                      >
                        Sign In Now.
                      </span>
                    </h4>
                  )}
                </form>
                <div className="mt-2 text-sm text-[#E50914] w-52">
                  {error && <div>{error}</div>}
                </div>
                <div className="mt-2 text-sm text-green-600 w-52">
                  {success && <div>{success}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signIn;
