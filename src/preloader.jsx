import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "./loader.json"; // Your JSON animation file
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate preloader timeout (you can change the delay)
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade out animation
      setTimeout(onComplete, 1000); // Call the onComplete callback after fadeout
    }, 5000); // Preloader duration in milliseconds

    return () => clearTimeout(timer); // Clean up timer
  }, [onComplete]);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="animation-container">
        <Lottie animationData={loaderAnimation} loop={true} />
      </div>
      <h2 className="preloader-text">event name?</h2>
    </div>
  );
};

export default Preloader;
