import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import seriesPoster from "../Assets/SeriesPoster.jpg";
import SeriesTitle from "../Assets/SeriesTitle.png"
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from "react-icons/ai";
import '../Styles/Home.css'
import { useNavigate } from 'react-router-dom';
import { API_KEY, TMBD_BASE_URL } from "../utils/Constants";
import axios from 'axios';
import Slider from '../components/Slider';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  useEffect(() => {
    fetchMovies();
    fetchMoviesGenre();
  }, []);

  const [movie, setMovie] = useState({});

  const fetchMovies = async () => {
    const data = await axios.get(
      `${TMBD_BASE_URL}/trending/all/week?api_key=${API_KEY}`
    );
    setMovie(data);
    console.log(movie)
  }

  const fetchMoviesGenre = async () => {
    const data = await axios.get(
      `${TMBD_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    setMovie(data);
    //console.log(results)
   // console.log(results);
    console.log(movie);
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
    </>
  );
}

export default Home;
