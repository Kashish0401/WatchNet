
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD67xU_McJzBKXY5IU0znXggVkd4PV9bQA",
  authDomain: "watchnet-5d565.firebaseapp.com",
  projectId: "watchnet-5d565",
  storageBucket: "watchnet-5d565.appspot.com",
  messagingSenderId: "84297464731",
  appId: "1:84297464731:web:a82eb1984011bf88c6bf3e",
  measurementId: "G-0V7DPRBS6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);