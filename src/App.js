// import logo from './logo.svg';
import './App.css';
// import React, { useState } from 'react';
// import { Route, Link } from 'react-router';
import Home from './Home';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
