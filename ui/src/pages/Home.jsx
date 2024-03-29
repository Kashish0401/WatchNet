import React, { useState } from 'react';
import Header from '../components/Header';
import seriesPoster from "../Assets/SeriesPoster.jpg";
import SeriesTitle from "../Assets/SeriesTitle.png"
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from "react-icons/ai";
import '../Styles/Home.css'
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/signup");
  });

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
      <Slider />
    </>
  );
}

export default Home;
