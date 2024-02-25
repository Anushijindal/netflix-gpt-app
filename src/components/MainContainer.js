import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie=movies[0];
    // console.log(mainMovie);
    const {title,overview,id}=mainMovie;
    // console.log(title)
  return (
    <div className='pt-40 bg-black md:pt-0'>
    <VideoTitle title={title} overview={overview}/>
    <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer