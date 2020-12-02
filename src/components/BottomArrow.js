// --- Core Modules ---
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
// --- CSS & Images ---
import "../styles/BottomArrow.css";
// --- Icons ---
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// --- Animations ---
import { TweenMax } from "gsap";

// Functional ReactJS component, that is rendering a bottom arrow.
const BottomArrow = ({ nextPage, delay }) => {
  // Animation (Show up).
  const bottomArrow = useRef(null);
  useEffect(() => {
    TweenMax.from(bottomArrow.current, {
      delay: delay,
      duration: 1,
      opacity: 0,
      ease: "power2.out",
    });
  }, [delay]);
  // ReactJS Hook from 'react-router-dom', for pushing to other pages.
  const history = useHistory();
  const goToNextSection = (e) => {
    e.preventDefault();
    history.push(nextPage);
  };
  // Return the element.
  return (
    <button ref={bottomArrow} className="bottomArrow" onClick={goToNextSection}>
      <ExpandMoreIcon fontSize="large" />
    </button>
  );
};
// Export the component.
export default BottomArrow;
