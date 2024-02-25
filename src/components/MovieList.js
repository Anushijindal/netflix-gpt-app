import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    // console.log(title);
    // console.log(movies);
    if(!movies)return;
  return (
    <div className=''>
        <div className='md:pt-0 pt-5 px-6 bg-transparent'>
            <h1 className='font-bold md:text-3xl text-xl text-white py-4'>{title}...</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex over'>
            {movies?.map(movie=><MovieCard key={movie.id} poster={movie.poster_path} name={movie.title}/>)}
            </div>
            </div>
        </div>
    </div>
  );
};

export default MovieList;