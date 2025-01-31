import React from "react";
import "../styles/_hero.scss";
import Header from "./Header";
import { Container } from "react-bootstrap";
import Button from "./Button";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section className="hero d-flex flex-column">
      <Header />
      <Container>
        <div className="hero-content d-flex flex-column gap-4">
          <AnimatedSection
            sectionType="white"
            subtitle="Where Nature Meets Design"
            title="Designing nature-inspired spaces, for you."
            description="At Laughing Wood Interiors, we bring your vision to life with a touch of nature, a dash of creativity, and a whole lot of heart."
            styles={{
              subtitle: { color: "var(--color-white)" },
              title: { color: "var(--color-white)" },
              description: { color: "var(--color-white)" },
            }}
          />
          <div className="buttons d-flex gap-3">
            <Button text="Explore More" variant="primary" />
            <Button text="View Projects" variant="secondary" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
