import React, { useEffect, useState } from 'react';
import CardSlider from './CardSlider';
import axios from 'axios';
import { API_KEY, TMDB_BASE_URL } from "../utils/Constants";

const Slider = () => {

  const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  const [romance, setRomance] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);
  const [comedy, setComedy] = useState([]);

  useEffect(() => {
    const trending = async () => {
      try {
        const movie = await axios.get(`${TMDB_BASE_URL}/trending/all/week?api_key=${API_KEY}`);
        setTrending(movie.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    trending();
    const fetchMovies = async () => {
      try {
        const movie = await axios.get(`${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}`);
        setMovies(movie.data.results);
        console.log(movie);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
    const genre28 = async () => {
      try {
        const movie = await axios.get(`${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
        setAction(movie.data.results);
        console.log(movie);
      } catch (error) {
        console.log(error);
      }
    }
    genre28();
    const genre27 = async () => {
      try {
        const movie = await axios.get(`${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`);
        setHorror(movie.data.results);
        console.log(movie);
      } catch (error) {
        console.log(error);
      }
    }
    genre27();
    const genre10749 = async () => {
      try {
        const movie = await axios.get(`${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`);
        setRomance(movie.data.results);
        console.log(movie);
      } catch (error) {
        console.log(error);
      }
    }
    genre10749();
    const genre35 = async () => {
      try {
        const movie = await axios.get(`${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`);
        setComedy(movie.data.results);
        console.log(movie);
      } catch (error) {
        console.log(error);
      }
    }
    genre35();
  }, []);

  return (
    <>
      <CardSlider data={trending} title="Trending Now" />
      <CardSlider data={movies} title="New Releases" />
      <CardSlider data={romance} title="Romance Movies" />
      <CardSlider data={action} title="Action Movies" />
      <CardSlider data={horror} title="Horror Movies" />
      <CardSlider data={comedy} title="Comedy Movie" />
    </>
  )
}

export default Slider
