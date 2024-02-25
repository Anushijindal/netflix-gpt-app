import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieName:null,
        movieData:null,
    },
    reducers:{
        toggleGptSearchView(state){
            state.showGptSearch=!state.showGptSearch;
        },
        addGptSuggestedMovies(state,action){
            const {movieName,movieData}=action.payload;
            state.movieName=movieName;
            state.movieData=movieData;
        },
    },
});
export const{toggleGptSearchView, addGptSuggestedMovies}=gptSlice.actions;
export default gptSlice.reducer;