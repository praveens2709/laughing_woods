"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiArrowRight } from "react-icons/fi";
import "../styles/_button.scss";

const Button = ({ text, variant = "primary", onClick, animate = false }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (animate && buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [animate]);

  return (
    <button
      ref={buttonRef}
      className={`custom-btn ${variant}`}
      onClick={onClick}
      style={{ visibility: animate ? "visible" : "hidden" }}
    >
      {text} <FiArrowRight />
    </button>
  );
};

export default Button;
