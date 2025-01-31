"use client";

import React, { useEffect } from "react";
import anime from "animejs";
import "../styles/_button.scss";
import { FiArrowRight } from "react-icons/fi";

const Button = ({ text, variant = "primary", onClick }) => {
  const buttonRef = React.useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      anime({
        targets: buttonRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        easing: "easeInOutQuad",
        duration: 800,
        delay: 300,
      });
    }
  }, []);  

  return (
    <button ref={buttonRef} className={`custom-btn ${variant}`} onClick={onClick}>
      {text} <FiArrowRight />
    </button>
  );
};

export default Button;
