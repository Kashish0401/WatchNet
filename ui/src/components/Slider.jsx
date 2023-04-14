import React from 'react'
import CardSlider from './CardSlider';
import { movies, Trending } from '../store';
const Slider = () => {

  return (
    <>
      <CardSlider title="Trending Now" data={Trending()} />
      <CardSlider title="New Releases" />
      <CardSlider title="Horror" data={movies('Horror')} />
      <CardSlider title="Science Fiction" data={movies('Science Fiction')} />
      <CardSlider title="Action" data={movies('Action')} />
      <CardSlider title="Romance" data={movies('Romance')} />
    </>
  )
}

export default Slider;