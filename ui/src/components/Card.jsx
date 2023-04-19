import React, { useState } from "react";
import "../Styles/Card.css";
import video from "../Assets/Loki.mp4";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri"
import { BsCheck } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import {  BiChevronDown } from "react-icons/bi"

const Card = (isLiked = false) => {
  const imgSrc =
    "https://image.tmdb.org/t/p/w500/qiAM7Y8xF8wJDDsjeSuLgzyFGmd.jpg";
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imgSrc} alt="movie" />
      {isHovered && (
        <div className="hover">
          <div className="image-vdo-container">
            <img src={imgSrc} alt="movie" onClick={() => navigate("/player")} />
            <video
              src={video}
              autoplay
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="info">
            <h3 className="name" onClick={() => navigate("/player")}>
              MovieName
            </h3>
            <IoPlayCircleSharp title="play" />
            <RiThumbUpFill title="Like" />
            <RiThumbDownFill title="Dislike" />
            {
              isLiked ? (
                <BsCheck title="Remove from List" />
              ) : (
                <AiOutlinePlus title="Add to my list" />
            )}
          </div>
          <div className="infoo">
            <BiChevronDown title="More Info"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
