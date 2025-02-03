"use client";

import React, { useState, useEffect } from "react";
import "@styles/_hero.scss";
import { Container } from "react-bootstrap";
import Button from "./Button";
import AnimatedSection from "./AnimatedSection";
import gsap from "gsap";

const Hero = ({ isLoading }) => {
  const [animateButtons, setAnimateButtons] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const tl = gsap.timeline();

      tl.to(".hero", {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
        onComplete: () => setShowHero(true),
      });
    }
  }, [isLoading]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
    {isMounted && (
      <section className="hero d-flex flex-column">
        {showHero && (
          <Container>
            <div className="hero-content d-flex flex-column gap-4">
              <AnimatedSection
                sectionType="white"
                subtitle="Where Nature Meets Design"
                title="Designing nature-inspired spaces, for you."
                description="At Laughing Wood Interiors, we bring your vision to life with a touch of nature, a dash of creativity, and a whole lot of heart."
                animationDelay={1000}
                styles={{
                  subtitle: { color: "var(--color-white)" },
                  title: { color: "var(--color-white)" },
                  description: { color: "var(--color-white)" },
                }}
                onAnimationComplete={() => setAnimateButtons(true)}
              />
              <div
                className="buttons d-flex gap-3"
                style={{ visibility: animateButtons ? "visible" : "hidden" }}
              >
                <Button text="Explore More" variant="primary" animate={animateButtons} />
                <Button text="View Projects" variant="secondary" animate={animateButtons} />
              </div>
            </div>
          </Container>
        )}
      </section>
      )}
    </>
  );  
};

export default Hero;
