import Header from "../components/Header";
import '../Styles/SignupStyles.css'
import image from "../Assets/signup.jpg";

const signup = () => {
  return (
    <>
        <Header/>
        <div className="mask">
      <img src={image} alt="" className="image"/>
    <div className="content">
      <div className='details'>
        <h1>Welcome to WatchNet</h1>
        <h3>Watch the latest movies online anywhere, anytime for free</h3>
        <h6>Ready to watch?</h6>
        <div className="form">
          <input type="email" placeholder='Email Address' name='email'/>
          <input type="password" placeholder='password' name='password' />
          <button>Get Started</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default signup
