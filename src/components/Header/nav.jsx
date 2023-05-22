import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "../About/about";
import N from "./nav.module.css";

const Nav = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked((prevIsMenuClicked) => !prevIsMenuClicked);
  };

  const menuBars = [1, 2, 3].map((index) => (
    <div
      key={index}
      className={`${N.burger_bar} ${
        isMenuClicked && N[`bar${index}`]
      } ${isMenuClicked && N.clicked}`}
    ></div>
  ));

  return (
    <Router>
      <div className={N.burger_container}>
        <div className={N.greeting}>
          <h1>
            Hi there! <br /> I’m Aziz Chiderov
          </h1>
          <h2>Nice to meet you!</h2>
          <h2>Scroll down to get to know me better</h2>
        </div>
        <div className={N.scroll}></div>
        <div className={N.scroll}></div>
        <div className={N.overlay + (isMenuClicked ? ` ${N.active}` : "")}>
          <div className={N.links}>
            <Link to="/about">About me & skills</Link>
            <Link to="/cv-portfolio">CV & Portfolio</Link>
            <Link to="/contacts">Contacts</Link>
          </div>
        </div>
        <div
          className={`${N.burger_menu} ${isMenuClicked && N.clicked}`}
          onClick={updateMenu}
        >
          {menuBars}
        </div>
      </div>
      <Routes>
        <Route path="../" element={ <About /> } />
        {/* Добавьте остальные маршруты */}
      </Routes>
    </Router>
  );
};

export default Nav;
