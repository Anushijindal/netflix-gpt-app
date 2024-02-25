import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useDispatch, useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  const dispatch=useDispatch();
 useNowPlayingMovies();
 useTopRatedMovies();
 usePopularMovies();
 useUpcomingMovies();
  return (
    <div className=''>
        <Header/>
        {
         showGptSearch && <GptSearch/>
         
          
        }
        {
          !showGptSearch &&
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </>
        }
        
    </div>
  );
};
export default Browse;