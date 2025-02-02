"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import "@styles/loader.scss";

const Loader = () => {
  useEffect(() => {
    const logo = ".loader-spinner";
    const tl = gsap.timeline({ repeat: 5, repeatDelay: 0.5 });
    tl.to(logo, {
      y: 30,
      duration: 0.4,
      ease: "power1.none",
    })
      .to(logo, {
        y: 0,
        duration: 0.2,
        ease: "power1.out",
      })
      .to(logo, {
        y: 20,
        duration: 0.2,
        ease: "power1.none",
      })
      .to(logo, {
        y: 0,
        duration: 0.4,
        ease: "power1.out",
      })
      .to(logo, {
        y: "-100vh",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div className="loader">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;
