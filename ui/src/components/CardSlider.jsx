import React from 'react'
import Card from './Card'
import '../Styles/CardSlider.css'

const CardSlider = ({ title, data }) => {
  return (
    <div className='cardSlider'>
      {data.map((movie, index) => {
        return <Card movieData={movie} index={index} key={movie.id} />
      })}
    </div>
  )
}

export default CardSlider
