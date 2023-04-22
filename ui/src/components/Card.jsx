import React, { useState } from "react";
import "../Styles/Card.css";
import video from "../Assets/Loki.mp4";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri"
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";

const Card = ({ movieData, isLiked = false }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();
  const iconStyle = {
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    tranisition: '.3sec',
    tranisition: 'ease-in-out'
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser)
      setEmail(currentUser.email);
    else navigate("/login");
  });

  const addToList = async () => {
    try {
      await axios.post("http://localhost:5000/database/user/add",{email, data:movieData})
    } catch (error) {
      console.log(error);
    }
  }

  //console.log(movieData);
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
                <RiThumbUpFill title="Like" style={iconStyle} />
                <RiThumbDownFill title="Dislike" style={iconStyle} />
                {
                  isLiked ? (
                    <BsCheck title="Remove from List" style={iconStyle} />
                  ) : (
                    <AiOutlinePlus title="Add to my list" onClick={addToList} style={iconStyle} />
                  )}
              </div>
            </div>
            <div className="infoo">
              <BiChevronDown title="More Info" style={iconStyle} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
