import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
const GptMovieSuggestion = () => {
        const {movieName,movieData}=useSelector(store=>store.gpt);
        if(!movieName) return null;
        console.log(movieName);
        console.log(movieData);
  return (
    <div className='bg-black bg-opacity-95 '>
      {movieName.map((movie,index)=><MovieList key={movie} title={movie} movies={movieData[index]}/>)}
    </div>
  );
};

export default GptMovieSuggestion;