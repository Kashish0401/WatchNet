import React, { useState } from "react";
import "../Styles/Card.css";
import video from "../Assets/Loki.mp4";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri"
import { BsCheck } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"

const Card = ({ movieData, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const iconStyle = {
    color: 'white',
    fontSize: '2rem',
    cursor: 'pointer',
    tranisition: '.3sec',
    tranisition: 'ease-in-out'
  }

  console.log(movieData);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt="movie" className="movieImg" />
      {isHovered && (
        <div className="hover">
          <div className="image-vdo-container">
            <img src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt="movie" onClick={() => navigate("/player")} className="hoverImg" />
            <video
              className="hoverVdo"
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="hoverInfo">
            <h4 className="name" onClick={() => navigate("/player")}>
              {movieData?.original_name ? movieData.original_name : movieData.original_title}
            </h4>
            <div className="outerCtrl">
              <div className="innerCtrl">
                <IoPlayCircleSharp title="play" style={iconStyle} />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                {
                  isLiked ? (
                    <BsCheck title="Remove from List" />
                  ) : (
                    <AiOutlinePlus title="Add to my list" />
                  )}
              </div>
            </div>
            <div className="infoo">
              <BiChevronDown title="More Info" />
            </div>
          </div>

        </div>

      )}
    </div>
  );
};

export default Card;
