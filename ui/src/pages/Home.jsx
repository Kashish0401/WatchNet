import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import seriesPoster from "../Assets/SeriesPoster.jpg";
import SeriesTitle from "../Assets/SeriesTitle.png"
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from "react-icons/ai";
import '../Styles/Home.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  //const genresLoaded = useSelector((state) => state.WatchNet.genresLoaded);
  //const movies = useSelector((state) => state.WatchNet.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);
/*
  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, [genresLoaded]);
*/
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
    </>
  )
}

export default Home
