import React from 'react'

const VideoTitle = (props) => {
    const{title,overview}=props;
    // console.log(overview);
  return (
    <div className='w-screen aspect-video md:pt-96 md:px-24 pt-28 px-10 absolute bg-gradient-to-r from-black'>
        <h1 className='text-lg md:text-4xl font-bold text-white'>{title}</h1>
        <p className='hidden md:block w-full md:w-1/4 md:py-4 py-2 md:text-base text-xs text-white'>{overview}</p>
        <div>
            <button className='text-black border border-t-2 border-gray-800 bg-white font-bold md:m-2 m-1 md:px-6 px-1 py-1 md:text-base text-xs rounded-lg md:hover:px-8 hover:px-2 md:hover:m-1 md:hover:py-2 hover:bg-opacity-80'> ▶ Play</button>
            <button className='bg-gray-500 border border-t-2 border-gray-800 text-white font-bold md:m-2 m-1 md:px-6 px-1 py-1 md:text-base text-xs rounded-lg md:hover:px-8 hover:px-2 md:hover:m-1 md:hover:py-2 bg-opacity-80'> ℹ More info</button>
        </div>
    </div>
  );
};

export default VideoTitle;