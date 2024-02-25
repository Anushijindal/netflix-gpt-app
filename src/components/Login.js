import React, { useRef, useState } from 'react';
import Header from './Header';
import { CheckValidatedata } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_URL, PROFILE_URL } from '../utils/constants';
const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true);
    const [errMessage,setErrMessage]=useState(null);
    const [showPassword,setShowPassword]=useState(false);
    const dispatch=useDispatch();
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const toggleSignUp=()=>{
        setIsSignIn(!isSignIn);
    };
    const handleButtonClick=()=>{
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message=CheckValidatedata(email.current.value,password.current.value);
        // console.log(message);
        setErrMessage(message);
        if(message) return;
        if(!isSignIn){
            //sign up form
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential)=>{
                const user=userCredential.user;
                updateProfile(user,{
                    displayName:name.current.value,photoURL:PROFILE_URL
                }).then(()=>{
                    const {uid,email,displayName,photoURL}=auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                }).catch((error)=>{
                    setErrMessage(error.message);
                })
                console.log(user);
            })
            .catch((error)=>{
                const errorCode=error.code;
                const errMessage=error.message;
                setErrMessage(errorCode+"_"+errMessage);
            });
        }
        else{
        // sign in form
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential)=>{
            const user=userCredential.user;
            console.log(user);
        })
        .catch((error)=>{
            const errorCode=error.code;
                const errMessage=error.message;
                setErrMessage(error.message);
        })
        }
    };
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img  className="h-screen object-cover md:w-screen" 
        src={BACKGROUND_URL} 
        alt=''/>
        </div>
        <div className=''>
            <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black bg-opacity-85 md:w-4/12 w-full rounded-xl p-12 my-36 mx-auto left-0 right-0 text-white'>
                <h2 className='text-white font-bold text-3xl py-4'>{isSignIn? "Sign In":"Sign Up"}</h2>
                {!isSignIn && <input 
                ref={name}
                type='text' 
                placeholder='Enter Name' 
                className='my-4 p-4 w-full rounded-md bg-gray-800 border-b border-0 border-yellow-600'/>
                }
                <input 
                ref={email}
                type='text' 
                placeholder='Email Address' 
                className='my-4 p-4 w-full rounded-md bg-gray-800 border-b border-0 border-yellow-600' />
                {/* <br/> */}
                {/* {
                    errMessage==="Email is not valid" && <p className='text-xs text-yellow-600'>{errMessage}</p>
                } */}
                <input 
                ref={password}
                
                type='password' 
                placeholder='Enter Password' 
                className='my-4 p-4 w-full rounded-md bg-gray-800 border-b border-0 border-yellow-600'/>
                <br/>
                {/* {
                    errMessage==="Password is not valid" && <p className='text-xs text-yellow-600'>{errMessage}</p>
                }
                {
                    errMessage==="User Not Found! Please try again" && <p className='font-bold text-rose-900'>{errMessage}</p>
                } */}
                <button className='p-3 my-4 rounded-xl text-white bg-red-600 w-full' onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
                {
                    errMessage && <p className='font-bold text-rose-900'>{errMessage}</p>
                }
                <p className='text-white py-4 cursor-pointer' onClick={toggleSignUp}>
                {isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    </div>
  )
};

export default Login;