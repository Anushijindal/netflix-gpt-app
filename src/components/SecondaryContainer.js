import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className='bg-black w-screen aspect-video'>
    <div className=' md:-mt-52 relative z-20 ml-10'>
    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
    <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
    <MovieList title={"Popular"} movies={movies?.popularMovies}/>
    <MovieList title={"Upcoming"} movies={movies?.upcomingMovies}/>
    <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies}/>
    </div>
    </div>
  );
};

export default SecondaryContainer;