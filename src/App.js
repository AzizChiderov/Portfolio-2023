import React from 'react';
import './App.css';
import Nav from "./components/Header/nav"


function App() {
  return (
    <>
    <Nav />
    <div className='greeting'>
    <h1>Hi there! <br /> I’m Aziz Chiderov</h1>
    <h2>Nice to meet you!</h2>
    <h2>Scroll down to get to know me better</h2>
    </div>
    <div className='scroll'></div>
    <div className='scroll'></div>
    </>
  );
}

export default App;
