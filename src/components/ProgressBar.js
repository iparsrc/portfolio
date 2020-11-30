// --- Core Modules ---
import React, { useEffect, useRef } from "react";
// --- CSS & Images ---
import "../styles/ProgressBar.css";
// --- Animations ---
import { TweenMax } from "gsap";

// Functional ReactJS component, that renders a progress bar.
const ProgressBar = ({ skill, value, delay, valueDelay }) => {
  // Animations.
  const progressBar = useRef(null);
  const progressBar__value = useRef(null);
  useEffect(() => {
    TweenMax.from(progressBar__value.current, {
      delay: valueDelay,
      duration: 2,
      width: "0%",
      ease: "power2.out",
    });
    TweenMax.fromTo(
      progressBar.current,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
      }
    );
  }, [delay, valueDelay]);
  // Return the elements.
  return (
    <div ref={progressBar} className="progressBar">
      <div
        ref={progressBar__value}
        className="progressBar__value"
        style={{ width: `${value}%` }}
      >
        <div className="progressBar__skill">
          <h4>{skill}</h4>
        </div>
      </div>
      <span>{value}</span>
    </div>
  );
};
// Export the component.
export default ProgressBar;
