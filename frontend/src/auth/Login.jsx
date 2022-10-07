import React from 'react';
import { useEffect } from 'react';
import './Login.css';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import Quora from '../components/Quora';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../feature/userSlice";
import { selectUser } from '../feature/userSlice';
import { motion } from 'framer-motion';


import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

  const user = useSelector(selectUser)
  /*const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);*/

  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/Home");

      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <motion.div className='login-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0 }}
    >
      <div class='boxx'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
      <div class="slider-thumb"></div>



      <div className="login-content">

        <img src='https://github.com/Arjun-Zan-D/OnlyCharity/blob/main/img/ezgif-1-d0863040a1.gif?raw=true' alt="logo" />

        <button onClick={handleSubmit} className='btn-login btnn'>
          <div class="googleI">
            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
          </div>

          Login with Google
        </button>
        



      </div>
      


    </motion.div>
  )
}

export default Login