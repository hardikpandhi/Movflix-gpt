import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";


const Login= () => {

    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const dispatch=useDispatch();

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);


    const toggleInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick=()=>{

        const message=checkValidateData(email.current.value,password.current.value);
        console.log(email.current.value);
        console.log(password.current.value);
        if(message) return;

        if(!isSignInForm){

            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);

                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL:USER_AVATAR
                    })
                  .then(() => {
                    // Profile updated!
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))

                  })
                  .catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message)
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }
        else{
                signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);    
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);    
                console.log(errorMessage);
            });
        }

        setErrorMessage(message);

    }
    return (
        <div >
            <Header/>
            <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg" 
             alt="backrgound"></img>
            </div>  

            <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 w-3/12 bg-black
             my-36 mx-auto right-0 left-0 text-white  bg-opacity-70 rounded-lg'>
                <h1 className="Bold text-3xl y-4 ">
                    {isSignInForm? "Sign In" : "Sign Up"}
                 </h1>

                {!isSignInForm && <input ref={name} type='text' placeholder='Enter Full Name' className='p-4 my-4 w-full bg-gray-600'></input>}

                <input ref={email} type='text' placeholder='Enter Email' className='p-4 my-4 w-full bg-gray-600'></input>

                <input ref={password} type='password' placeholder='Enter Password' className='p-4 my-4 w-full bg-gray-600'></input>

                <p className="text-red-500">{errorMessage}</p>
                <button className='p-4 my-6 bg-red-600 w-full rounded-md' onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
                <p onClick={toggleInForm} className="hover:cursor-pointer">
                    {isSignInForm?  "New to MovFlix? Signup Now" : "Already a user? SignIn Now"}
                    </p>
            </form>
        </div>
    )
}

export default Login;