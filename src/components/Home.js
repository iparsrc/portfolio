// --- Core Modules ---
import React, { useEffect, useRef } from "react";
// --- ReactJs Components ---
import BottomArrow from "./BottomArrow";
// --- CSS & Images ---
import "../styles/Home.css";
// --- Icons ----
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// --- Animations ---
import { TweenMax } from "gsap";

// Functional ReactJS component, that renders the home page.
const Home = () => {
  // Animations (bottom to top).
  const homeBodyInfoH1 = useRef(null);
  const homeBodyInfoP = useRef(null);
  const homeBodyIconsGithubIcon = useRef(null);
  const homeBodyIconsTwitterIcon = useRef(null);
  const homeBodyIconsLinkedInIcon = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(
      [
        homeBodyInfoH1.current,
        homeBodyInfoP.current,
        homeBodyIconsLinkedInIcon.current,
        homeBodyIconsGithubIcon.current,
        homeBodyIconsTwitterIcon.current,
      ],
      1,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        delay: 1,
        opacity: 1,
        stagger: 0.3,
        ease: "power2.out",
      }
    );
  }, []);
  // Return the element.
  return (
    <div className="home">
      <div className="home__body">
        <div className="home__bodyInfo">
          <h1 ref={homeBodyInfoH1}>I'm Parsa Akbari.</h1>
          <p ref={homeBodyInfoP}>
            I am a Full Stack Web Developer, And backend lover.
          </p>
        </div>
        <div className="home__bodyIcons">
          <LinkedInIcon ref={homeBodyIconsLinkedInIcon} fontSize="large" />
          <GitHubIcon ref={homeBodyIconsGithubIcon} fontSize="large" />
          <TwitterIcon ref={homeBodyIconsTwitterIcon} fontSize="large" />
        </div>
        <BottomArrow nextPage="/about" delay="3" />
      </div>
    </div>
  );
};
// Export the component.
export default Home;
