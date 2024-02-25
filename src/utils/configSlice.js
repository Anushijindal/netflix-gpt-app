import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:'config',
    initialState:{
        def_lang:'en',
    },
    reducers:{
        changeLang(state,action){
            state.def_lang=action.payload;
        },
    },
},
);
export const {changeLang}=configSlice.actions;
export default configSlice.reducer;