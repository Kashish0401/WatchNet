import '../Styles/Header.css'
import {FaSearch, FaUserCircle} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate=  useNavigate();
  return (
    <>
      <div className="header">
        <h2>WatchNet</h2>
        <div className="icons">
          <FaSearch className='icon' size={25}/>
          <FaUserCircle className='icon' size={25}/>
        </div>
      </div>
    </>
  )
}

export default Header
