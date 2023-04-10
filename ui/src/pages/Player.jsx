import React from 'react'
import '../Styles/Player.css';
import { BsArrowLeft } from 'react-icons/bs';
import video from '../Assets/Loki.mp4';
import { useNavigate } from 'react-router-dom';

const Player = () => {
    const navigate = useNavigate();
    const style = {
        fontSize : '3rem',
        cursor: 'pointer',
        color: 'white'
    }
  return (
    <>
      <div className='player'>
        <div className='back'>
            <BsArrowLeft style={style} onClick={()=> navigate(-1)}/>
        </div>
        <video src={ video } autoPlay loop controls muted />
      </div>
    </>
  )
}

export default Player
