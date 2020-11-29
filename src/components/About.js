// --- Core Modules ---
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// --- ReactJS Components ---
import ProgressBar from "./ProgressBar";
import BottomArrow from "./BottomArrow";
// --- CSS & Images ---
import "../styles/About.css";
import me from "../images/me3.png";
// --- Animations ---
import { TweenMax } from "gsap";

// Functional ReactJS component, that renders the about page.
function About() {
  // Animations (bottom to top).
  const aboutMeImage = useRef(null);
  const aboutMeTextH3 = useRef(null);
  const aboutMeTextP1 = useRef(null);
  const aboutMeTextP2 = useRef(null);
  const aboutMeTextLink = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(
      [
        aboutMeImage.current,
        aboutMeTextH3.current,
        aboutMeTextP1.current,
        aboutMeTextP2.current,
        aboutMeTextLink.current,
      ],
      {
        opacity: 0,
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  });
  // Return the element.
  return (
    <div className="about">
      <div className="about__me">
        <img src={me} alt="My" ref={aboutMeImage} />
        <div className="about__meText">
          <h3 ref={aboutMeTextH3}>Who is this guy?</h3>
          <p ref={aboutMeTextP1}>
            I am a Computer Engineering student at Tabriz University.
          </p>
          <p ref={aboutMeTextP2}>
            I have serious passion for system architectures, UI/UX and dynamic
            user experiences.
          </p>
          <span ref={aboutMeTextLink}>
            <Link to="/contact">Let's make something special.</Link>
          </span>
        </div>
      </div>
      <div className="about__skills">
        <ProgressBar skill="Python" value="90" delay="0.2" valueDelay="1.6" />
        <ProgressBar skill="Golang" value="85" delay="0.4" valueDelay="1.6" />
        <ProgressBar
          skill="HTML5/CSS3"
          value="80"
          delay="0.6"
          valueDelay="1.6"
        />
        <ProgressBar skill="ReactJS" value="75" delay="0.8" valueDelay="1.6" />
        <ProgressBar skill="JavaScript" value="70" delay="1" valueDelay="1.6" />
        <ProgressBar skill="Docker" value="65" delay="1.2" valueDelay="1.6" />
        <ProgressBar
          skill="Kubernetes"
          value="60"
          delay="1.4"
          valueDelay="1.6"
        />
      </div>
      <BottomArrow nextPage="/projects" delay="2.6" />
    </div>
  );
}
// Export the component.
export default About;
