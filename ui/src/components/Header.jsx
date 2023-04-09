import { useState } from 'react'
import '../Styles/Header.css'
import {FaSearch, FaPowerOff} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'

const iconStyle = {color: 'white' ,
  fontSize: '1.2rem'}
const Header = ({isScrolled}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  /*const navigate=  useNavigate();
  onAuthStateChanged(firebaseAuth,(currentUser) => {
    if(!currentUser) 
      navigate("/login");
  });*/

  return (
    <>
      <div className={ `${isScrolled ? "scrolled header" : "header"}`}>
        <h2>WatchNet</h2>
        <div className='links'>
          <Link path="/">Home</Link>
          <Link path="/">My List</Link>
        </div>
        <div className="icons">
          <div className={`search ${showSearch ? "showSearch" : ""}`}>
            <button
            className='headerIconsButton'
            onFocus={()=> setShowSearch(true)}
            onBlur={()=>{
              if(!inputHover){
                setShowSearch(false);
              }
            }}
            >
              <FaSearch style={iconStyle}/>
              </button>
              <input 
              className='headerInput'
              type='text' placeholder='Search' onMouseEnter={() =>
                setInputHover(true)
              }
              onMouseLeave={()=> setInputHover(false)}
              onBlur={()=>{
                setInputHover(false)
                setShowSearch(false);
              }}></input>
          </div>
          <button 
          className='headerIconsButton'
          onClick={()=> signOut(firebaseAuth)}>
            <FaPowerOff style={iconStyle}/>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
