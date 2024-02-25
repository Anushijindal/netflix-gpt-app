import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from './moviesSlice';
import { API_OPTIONS } from './constants';

const useTrailerVideo = (movieId) => {
    const dispatch=useDispatch();
    const trailerVideo=useSelector(store=>store.movies.trailerVideo);
    const getMovieVideo=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        const json=await data.json();
        // console.log(json.results);
        const filterTrailer = json.results.filter((video)=>video.type==="Trailer");
        const trailer=filterTrailer.length?filterTrailer[0]:json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(()=>{
        !trailerVideo &&
        getMovieVideo();
    },[]);
};

export default useTrailerVideo;