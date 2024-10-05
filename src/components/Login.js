import { useState } from "react";
import Header from "./Header";

const Login= () => {

    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div >
            <Header/>
            <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg" 
             alt="backrgound"></img>
            </div>  

            <form className='absolute p-12 w-3/12 bg-black
             my-36 mx-auto right-0 left-0 text-white  bg-opacity-70 rounded-lg'>
                <h1 className="Bold text-3xl y-4 ">
                    {isSignInForm? "Sign In" : "Sign Up"}
                 </h1>

                {!isSignInForm && <input type='text' placeholder='Enter Full Name' className='p-4 my-4 w-full'></input>}

                <input type='text' placeholder='Enter Email' className='p-4 my-4 w-full'></input>

                <input type='password' placeholder='Enter Password' className='p-4 my-4 w-full'></input>
                <button className='p-4 my-6 bg-red-600 w-full rounded-md'>{isSignInForm? "Sign In" : "Sign Up"}</button>
                <p onClick={toggleInForm} className="hover:cursor-pointer">
                    {isSignInForm?  "New to MovFlix? Signup Now" : "Already a user? SignIn Now"}
                    </p>
            </form>
        </div>
    )
}

export default Login;