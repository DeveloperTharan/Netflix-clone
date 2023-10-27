import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginScreen from "./components/Login/LoginScreen";
import { auth } from "./firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from './components/Profile/Profile'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        /*  console.log(userAuth); */
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });

    return unsubsribe;
  }, []);

  return (
    <>
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="profile" element={<Profile/>} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
