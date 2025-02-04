"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@styles/_svg.scss";

const AnimatedSection = ({
  subtitle,
  title,
  description,
  styles = {},
  animationDelay = 0,
  sectionType = "white",
  onAnimationComplete,
}) => {
  const sectionRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current && !animationPlayed) {
      const elements = sectionRef.current.children;
      gsap.set(elements, { opacity: 0, y: 30 });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        delay: animationDelay / 1000,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
          setAnimationPlayed(true);
        },
      });
    }
  }, [animationDelay, onAnimationComplete, animationPlayed]);

  return (
    <div ref={sectionRef} className="animated-section d-flex flex-column gap-3">
      {subtitle && (
        <div
          className={`subtitle-wrapper d-flex align-items-center gap-2 ${sectionType}`}
          style={{ color: styles.subtitle?.color || "var(--color-white)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="6"
            viewBox="0 0 27 6"
            className="subtitle-icon"
            style={{ fill: styles.subtitle?.color || "var(--color-white)" }}
          >
            <path d="M26.8868 3L24 0.113249L21.1132 3L24 5.88675L26.8868 3ZM0 3.5H24V2.5H0V3.5Z" />
          </svg>
          <p className="subtitle mb-0">{subtitle}</p>
        </div>
      )}
      {title && (
        <h1
          className="title animated-heading"
          style={{
            ...styles.title,
            color: styles.title?.color || "var(--color-white)",
          }}
        >
          {title}
        </h1>
      )}
      {description && (
        <p
          className="description"
          style={{
            ...styles.description,
            color: styles.description?.color || "var(--color-white)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default AnimatedSection;
