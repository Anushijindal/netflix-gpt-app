import React from 'react'
import { POSTER_URL } from '../utils/constants';

const MovieCard = ({poster,name}) => {
  if(!poster) return null;
  return (
    <div >
        <div className='w-32 md:w-36 border-2 border-black mr-4 rounded-lg'>
            <img className='rounded-lg' alt='' src={POSTER_URL+poster}/>
            <div className='text-center text-white bg-black'>
            <h4 className='font-bold text-sm md:text-base'>{name}</h4>
            </div>
        </div>
        
    </div>
  );
};

export default MovieCard;