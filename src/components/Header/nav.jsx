import React, { useState } from "react";
import N from "./nav.module.css";

const Nav = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked((prevIsMenuClicked) => !prevIsMenuClicked);
  };

  const menuBars = [1, 2, 3].map((index) => (
    <div
      key={index}
      className={`${N.burger_bar} ${isMenuClicked && N[`bar${index}`]} ${isMenuClicked && N.clicked}`}
    ></div>
  ));

  return (
    <div className={N.burger_container}>
      <div className={N.overlay + (isMenuClicked ? ` ${N.active}` : "")}>
        <div className={N.links}>
          <a href="/about">About</a>
          <a href="/skills">Skills</a>
          <a href="/cv-portfolio">CV & Portfolio</a>
          <a href="/contacts">Contacts</a>
        </div>
      </div>
      <div
        className={`${N.burger_menu} ${isMenuClicked && N.clicked}`}
        onClick={updateMenu}
      >
        {menuBars}
      </div>
    </div>
  );
};

export default Nav;
