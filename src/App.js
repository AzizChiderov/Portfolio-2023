import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Header/nav";
import About from "./components/About/about";
import Path from "./components/Path/path";

function App() {
  return (
      <div className="app-container">
        <div className='nav'>
        <Nav />
        </div>
      <div className='about'>
        <About />
      </div>
      <div className='path'>
        <Path />
      </div>
      </div>
  );
}

export default App;
