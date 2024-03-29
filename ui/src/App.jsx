import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Player from './pages/Player';
import List from './pages/List';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/player' element={<Player />} />
        <Route path='/mylist' element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}
