import Header from "../components/Header";
import '../Styles/Signup.css'
import image from "../Assets/signup.jpg";
import { useState } from "react";
import { firebaseAuth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({email: "", password: ""});

  const handleSignin = async () => {
    try{
      const {email, password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    catch(err){
      console.log(err);
    }
  }

  onAuthStateChanged(firebaseAuth,(currentUser) => {
    if(currentUser) 
      navigate("/")
  });

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
              <input className="signupInput" type="email" 
              placeholder='Email Address' 
              name='email' value={formValues.email} 
              onChange={
                (e) => setFormValues({...formValues, [e.target.name]: e.target.value,})
              }/>
              <input className="signupInput" type="password" 
              placeholder='password' 
              name='password' 
              value={formValues.password} 
              onChange={
                (e) => setFormValues({...formValues, [e.target.name]: e.target.value,})
                }/>
              <button className="signupButton" onClick={handleSignin}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
