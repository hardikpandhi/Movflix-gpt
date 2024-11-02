import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch();


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(()=>{
        
    const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    
        navigate("/browse")
    } 
    else {
        // User is signed out

        dispatch(removeUser())

        navigate("/")

    }
});
return ()=> unsubscribe();
},[])

  return (
    <div className='absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-30 flex justify-between'>
      <img src={LOGO}
       alt='logo' className='w-44'></img>
      {user && (<div className='flex p-4'>
      <img className='w-12 h-12' alt='userIcon' src={user.photoURL} />
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign out)</button>
      </div>)}
    </div>
    
  )
}

export default Header;