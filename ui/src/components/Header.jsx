import { useState } from 'react'
import '../Styles/Header.css'
import {FaSearch, FaPowerOff} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'

const Header = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const navigate=  useNavigate();
  return (
    <>
      <div className="header">
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
              <FaSearch/>
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
            <FaPowerOff/>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
