"use client";

import React, { useState, useEffect } from "react";
import "@styles/_hero.scss";
import { Container } from "react-bootstrap";
import Button from "./Button";
import AnimatedSection from "./AnimatedSection";

const HeroSection = ({
  title,
  subtitle,
  description,
  buttons,
  styles,
  backgroundClass,
}) => {
  const [animateButtons, setAnimateButtons] = useState(false);

  return (
    <>
        <section className={`hero ${backgroundClass} d-flex flex-column`}>
            <Container>
              <div className="hero-content d-flex flex-column gap-4">
                <AnimatedSection
                  subtitle={subtitle}
                  title={title}
                  description={description}
                  styles={styles}
                  animationDelay={2500}
                  onAnimationComplete={() => setAnimateButtons(true)}
                />
                {buttons?.length > 0 && (
                  <div
                    className="buttons d-flex gap-3"
                    style={{ visibility: animateButtons ? "visible" : "hidden" }}
                  >
                    {buttons.map((btn, index) => (
                      <Button
                        key={index}
                        text={btn.text}
                        variant={btn.variant}
                        animate={animateButtons}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Container>
        </section>
    </>
  );
};

export default HeroSection;
