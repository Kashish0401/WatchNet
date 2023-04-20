import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import seriesPoster from "../Assets/SeriesPoster.jpg";
import SeriesTitle from "../Assets/SeriesTitle.png"
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from "react-icons/ai";
import '../Styles/Home.css'
import { API_KEY, TMDB_BASE_URL } from "../utils/Constants"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setloading] = useState(false);
  const [movies, setMovies] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => { 
    const fetchData = async () => {
      try {
        setloading(true);
        const movie = await axios.get(`${TMDB_BASE_URL}/trending/all/week?api_key=${API_KEY}`);
        console.log(movie);
        setMovies(movie.data.results);
        setloading(false)
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    }
    fetchData();
  }, [])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Header isScrolled={isScrolled} />
      <div className='hero'>
        <img
          src={seriesPoster}
          alt="Poster"
          className='poster'
        />
        <div className='info'>
          <div className='seriesTitle'>
            <img src={SeriesTitle} alt="Title" className='title' />
          </div>
          <div className='heroButtons'>
            <button
              onClick={() => navigate("/player")}>
              <FaPlay />
              Play
            </button>
            <button>
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </>
  );
}

export default Home;
