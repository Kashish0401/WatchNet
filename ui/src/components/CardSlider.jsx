import React, { useRef, useState } from 'react'
import Card from './Card'
import '../Styles/CardSlider.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const CardSlider = ({ title, data }) => {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const listRef = useRef();

  const iconStyle = {
    fontSize : '2rem'
  }

  const handleDirection = (direction) => {
    console.log(listRef);
    let dist = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + dist}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + dist}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  }


  return (
    <div
      className='cardSlider'
      onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}
    >
      <h1> {title}</h1>
      <div className='wrapper'>
        <div
          className={`sliderAction left ${!showControls ? "none" : ""} sliderAction`}
        >
          <AiOutlineLeft style={iconStyle} onClick={() => handleDirection("left")} />
        </div>
        <div className='cardColumns' ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />
          })}
        </div>
        <div
          className={`sliderAction right ${!showControls ? "none" : ""} sliderAction`}
        >
          <AiOutlineRight style={iconStyle} onClick={() => handleDirection("right")} />
        </div>
      </div>
    </div>
  )
}

export default CardSlider
