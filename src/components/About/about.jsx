import React, { useEffect, useRef } from "react";
import A from "./about.module.css";

const About = () => {
  const containerRef = useRef(null);
  const leftBlockRef = useRef(null);
  const rightBlockRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (containerTop < windowHeight) {
        container.classList.add(A.show);
        leftBlockRef.current.classList.add(A.show);
        rightBlockRef.current.classList.add(A.show);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${A.container}`} ref={containerRef}>
      <div className={`${A.left_block} ${A.animateLeft}`} ref={leftBlockRef}>
        <h2>About me:</h2>
        <p>
          I am a creative person who is always looking for new opportunities,
          ideas and hobbies! My life is always moving, here are some
          interesting facts about me:
        </p>
        <ul className={A.about_me}>
          <li>I've traveled all over North and South America;</li>
          <li>I am friends with a Michelin-starred chef;</li>
          <li>Swam in a shark cage in Brazil;</li>
          <li>Visited every island in the Caribbean;</li>
          <li>Won a mini-football tournament;</li>
          <li>Received five kyu in Aikido;</li>
          <li>Read five books in one week;</li>
        </ul>
        <p>As you can see, I'm a fan of drive and travel!</p>
      </div>
      <div className={`${A.right_block} ${A.animateRight}`} ref={rightBlockRef}>
        <h2>My professional skills:</h2>
        <p> I'm frontend developer! And here is my soft and hard skills:
        </p>
        <div className={A.skills}>
          <ul className={A.it_skills}>
            IT skills:
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>AJAX</li>
            <li>Axios</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>Scrum</li>
            <li>TypeScript</li>
            <li>Bootstrap</li>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>OOP</li>
          </ul>
          <ul className={A.soft_skills}>
            Soft skills:
            <li>Communication Skills</li>
            <li>Analytical skills</li>
            <li>Ability to profitably manage resources</li>
            <li>Managerial skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
