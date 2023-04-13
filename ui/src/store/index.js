import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMBD_BASE_URL } from "../utils/Constants";

export const getGenres = async () => {
  const {
    data: { genres },
  } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  console.log(genres);
  return genres;
};

getGenres();

export const fetchMoviesTrending = async () => {
  const data = await axios.get(
    `${TMBD_BASE_URL}/trending/all/week?api_key=${API_KEY}`
  );
  //console.log(data);
  const { results } = data.data;
  const trending = [];
  results.map((e) => {
    const { original_title, backdrop_path } = e;
    if (original_title) {
      trending.push({ original_title, backdrop_path });
    }
  });
  return trending;
};

export const fetchMoviesGenre = async (genre) => {
  const data = await axios.get(
    `${TMBD_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`
  );
  //console.log(data);
  const { results } = data.data;
  const moviesArray = [];
  results.map((e) => {
    const { original_title, backdrop_path } = e;
    if (original_title) {
      moviesArray.push({ original_title, backdrop_path });
    }
  });
  console.log(moviesArray);
  return moviesArray;
};

fetchMoviesGenre(10749);

/*

const initialState = {
  movies: [],
  genresLoadded: false,
  genres: [],
};

const createArrayFromRawData = (array, moviesArray, genres) => {
  console.log(array);
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
      if (movie.backdrop_path) {
          moviesArray.push({
              id: movie.id,
              name: movie?.original_name ? movie.original_name : movie.original_title,
              image: movie.backdrop_path,
              genres: movieGenres.slice(0, 3),
          });
      }
  });
};

const getRawData = async (api, genres, paging) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`
    );
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "WatchNet/trending",
  async ({ type }, trunkAPI) => {
    const {
      WatchNet: { genres },
    } = trunkAPI.getState();
    return getRawData(
      `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
    
  }
);

//return getRawData(`${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genres}`);

const watchNetSlice = createSlice({
  name: "watchNet",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoadded = true;
    });
    /*builder.addCase(fetchMovies.fulfilled, (state, action) => {
        state.genres = action.payload;
    });
  },
});
export const store = configureStore({
  reducer: {
    watchNet: watchNetSlice.reducer,
  },
});*/
