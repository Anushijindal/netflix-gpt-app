import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLang } from '../utils/configSlice';
const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
    const handleLangChange=(e)=>{
        dispatch(changeLang(e.target.value));
    };
    const signOutbtn=()=>{
        signOut(auth)
        .then(()=>{
        })
        .catch((error)=>{
            navigate("/error");
        });
    };
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(user)=>{
        if(user){
            const {uid,email,displayName,photoURL}=user
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
        }else{
            dispatch(removeUser());
            navigate("/");
        }
    });
    return()=>unsubscribe();
    },[]);
    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView());
    }
  return (
    <div  className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between md:text-base text-xs">
        <img className='w-40 mx-auto md:mx-0' src={LOGO_URL} 
        alt='logo'/>
        {
        user && 
        <div className='flex'>
        {
            showGptSearch &&
            <select className='my-6 mr-3 border-2 border-white text-white bg-transparent rounded-lg' onChange={handleLangChange}>
            {
                SUPPORTED_LANG.map(lang=><option key={lang.identifier} className='bg-gray-500' value={lang.identifier}>{lang.langName}</option>)
            }
            </select>
        }
        {/* <input type='text' placeholder='search movie' className='w-40 p-2 m-6 rounded-lg border-2 border-white mr-3'/> */}
        <button onClick={handleGptSearchClick} className='bg-transparent text-white border-2 border-white my-6 p-2 rounded-lg mr-6 ml-0'>
        {
            showGptSearch?"Home":"GPT Search"
        }
        </button>
            <img className='md:w-12 md:h-12 w-8 h-8 md:m-4 mt-6' alt=''
            src={user?.photoURL}/>
            <button onClick={signOutbtn} className='bg-white bg-opacity-30 px-2 my-6 rounded-2xl text-white font-bold ml-28 md:ml-0'>Sign Out</button>
        </div>
        }
    </div>
  );
};

export default Header;