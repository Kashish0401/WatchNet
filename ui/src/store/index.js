import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    movies: [],
    genresLoadded: false,
    genres: [],
};

 const WatchNetSlice = createSlice({
    name: "WatchNet",
    initialState,
    extraReducers: (builder) =>{

    }
 });
 export const store = configureStore({
    reducer: {
        WatchNet: WatchNetSlice.reducer,
    },
 })