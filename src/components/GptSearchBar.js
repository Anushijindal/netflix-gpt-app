import React, { useRef } from 'react';
import langConstants from '../utils/langConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptSuggestedMovies } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.def_lang);
    const searchText=useRef();
    const dispatch=useDispatch();
    const searchMovieTMDB=async(movieName)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&page=1', API_OPTIONS);
        const json=await data.json();
        // console.log(json.results);
        return json.results;
    };
    const handleGptSearchClick=async()=>{
        console.log(searchText.current.value);
        const gptQuery="Act as movie Recommendation System and suggest some movies related for the Query: "
        +searchText.current.value+
        ". Only gave me names of 20 movies, comma seperated like the example Result given ahead. Example Result: Gadar, Koi Mil Gaya, Don, Padman, Sholay"
        const GptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });
        //   console.log(GptResults?.choices[0]?.message?.content);
          const gptMovies=GptResults?.choices[0]?.message?.content.split(',');
        //   console.log(gptMovies);
          const PromiseData=gptMovies.map(movie=>searchMovieTMDB(movie));
          const TMDBData=await Promise.all(PromiseData)
          console.log(TMDBData);
          dispatch(addGptSuggestedMovies({movieName:gptMovies,movieData:TMDBData}));
    };


  return (
    <div className='text-sm md:text-base'>
        <form className='md:pt-28 pt-40 bg-gradient-to-b from-black text-center'onSubmit={e=>e.preventDefault()}>
            <input ref={searchText} className='w-[230px] text-xs md:text-base md:w-1/3 bg-white text-black p-2 m-6 rounded-lg' type='text' placeholder={langConstants[langKey].gptSearchPlaceholder}/>
            <button className='bg-red-600 text-white md:p-2 md:m-2 p-1 border-2 border-white rounded-lg' onClick={handleGptSearchClick}>
            {langConstants[langKey].Search}
            </button>
        </form>
    </div>
  );
};
export default GptSearchBar;