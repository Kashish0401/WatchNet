import Header from "../components/Header";
//import styled from "styled"
import image from "../Assets/signup.jpg";

function Signup() {
  return (
    <div>
      <Header/>
    <div className="content">
      <div className='details'>
        <h1>Welcom to WatchNet</h1>
        <h3>Watch the latest movies online anywhere, anytime for free</h3>
        <h6>Ready to watch?</h6>
        <div className="form">
          <input type="email" placeholder='Email Address' name='email'/>
          <input type="password" placeholder='password' name='password' />
          <button>Get Started</button>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup;

