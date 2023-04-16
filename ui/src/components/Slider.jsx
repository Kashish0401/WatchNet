import React from 'react'
import CardSlider from './CardSlider';

const Slider = ({ movies }) => {

  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <>
      <CardSlider data={getMoviesFromRange(0, 10)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(10, 20)} title="New Releases" />
      <CardSlider
        data={getMoviesFromRange(20, 30)}
        title="Action"
      />
      <CardSlider
        data={getMoviesFromRange(30, 40)}
        title="Popular"
      />
      <CardSlider data={getMoviesFromRange(40, 50)} title="Science Fiction" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="Epics" />
    </>
  )
}

export default Slider
