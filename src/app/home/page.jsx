'use client';

import React, { useEffect, useState } from "react";
import Hero from "@components/Hero";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import "@styles/home.scss";
import Button from "@components/Button";
import AnimatedSection from "@components/AnimatedSection";
import { PiArmchairLight, PiLampLight, PiOfficeChairLight } from "react-icons/pi";
import CustomSlider from "@components/Slider";
import FAQ from "@components/FaQ";
import LoadingProvider from "@utils/LoadingProvider";
import { imageData, videoData } from "@utils/data";

const Home = () => {
  const [animateButtons, setAnimateButtons] = useState(false);
  const [animateFeatures, setAnimateFeatures] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <LoadingProvider isLoading={isLoading}>
        <Hero isLoading={isLoading} />
        <section className="about-section">
          <Container fluid>
            <Container>
              <Row className="align-items-center">
                <Col lg={6} className="about-images">
                  <div className="image-wrapper">
                    <div className="main-image-wrapper shine-hover">
                      <Image
                        src="/images/hero7.jpg"
                        alt="Living Room 1"
                        className="main-image"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="overlay-image-wrapper shine-hover">
                      <Image
                        src="/images/hero5.jpg"
                        alt="Living Room 2"
                        className="overlay-image"
                        width={600}
                        height={400}
                      />
                    </div>
                    <span className="rotated-text d-none d-xl-block">Laughing Wood</span>
                  </div>
                </Col>
                <Col lg={6} className="about-content">
                  <AnimatedSection
                    sectionType="primary"
                    subtitle="About Us"
                    title="Our passion for design, your vision realized."
                    description="Our dedicated team of designers works closely with you to understand your vision and bring it to life with thoughtful attention to detail. Whether it’s transforming a single room or an entire home."
                    styles={{
                      subtitle: { color: "var(--color-primary)" },
                      title: { color: "var(--color-black)" },
                      description: { color: "var(--color-black)" },
                    }}
                    onAnimationComplete={() => setAnimateButtons(true)}
                  />
                  <ul className="features">
                    <li>
                      <FaCheckCircle className="icon" />
                      <span>Creative expertise</span>
                    </li>
                    <li>
                      <FaCheckCircle className="icon" />
                      <span>Client-centered approach</span>
                    </li>
                  </ul>
                  <div
                    className="buttons d-flex gap-3"
                    style={{ visibility: animateButtons ? "visible" : "hidden" }}
                  >
                    <Button text="Read More" variant="primary" animate={animateButtons} />
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>

        <section className="px-0 py-5 whychooseus-section">
          <Container fluid>
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <AnimatedSection
                    sectionType="primary"
                    subtitle="Why Choose Us"
                    title="A behind-the-scenes look at our agency"
                    description="From concept to completion, discover how we bring your vision to life with innovation, collaboration, and expert craftsmanship."
                    styles={{
                      subtitle: { color: "var(--color-primary)" },
                      title: { color: "var(--color-black)" },
                      description: { color: "var(--color-black)" },
                    }}
                    onAnimationComplete={() => setAnimateFeatures(true)}
                  />
                  <div className="features-list ms-lg-2 me-lg-4">
                    {[
                      { icon: <PiLampLight size={25} />, title: "Tailored Design Solutions", desc: "We provide personalized interior design services that reflect your unique vision and lifestyle." },
                      { icon: <PiArmchairLight size={25} />, title: "Seamless Project Management", desc: "We handle the entire design process, from concept to completion, with flawless execution." },
                      { icon: <PiOfficeChairLight size={25} />, title: "Client-Centered Collaboration", desc: "Your input is valued throughout the entire process, ensuring your vision is fully realized." }
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className={`feature-item d-flex gap-3 border-bottom ${animateFeatures ? "fade-in-up" : "hidden"}`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="icon-circle rounded-circle">{feature.icon}</div>
                        <div className="whychooseus-content">
                          <h5>{feature.title}</h5>
                          <p className="mb-0">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="image-grid d-flex flex-column pt-lg-0 pt-3">
                    <div className="row">
                      <div className="image image1 pe-0 shine-hover">
                        <Image
                          src="/images/hero2.jpg"
                          alt="Interior Design 1"
                          width={600}
                          height={400}
                        />
                      </div>
                      <div className="image image2 shine-hover">
                        <Image
                          src="/images/hero3.jpg"
                          alt="Interior Design 2"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="image image3 pe-0 shine-hover">
                        <Image
                          src="/images/hero4.jpg"
                          alt="Interior Design 3"
                          width={600}
                          height={400}
                        />
                      </div>
                      <div className="image image4 shine-hover">
                        <Image
                          src="/images/hero9.jpg"
                          alt="Interior Design 4"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>

        <section className="slider-section">
          <Container fluid>
            <Container>
              <AnimatedSection
                title="Laughing Wood Interiors"
                description="A glimpse into our stunning interiors"
                styles={{
                  title: { fontFamily: "var(--font-secondary)", color: "var(--color-primary)" },
                  description: { color: "var(--color-secondary)" },
                }}
              />
              <CustomSlider type="image" data={imageData} />
            </Container>
          </Container>
        </section>

        <section className="fixed-background-section">
          <Container>
            <Row className="text-center justify-content-center">
              <Col lg={8} className="d-flex flex-column align-items-center gap-5">
                <AnimatedSection
                  title="Crafting Timeless Spaces"
                  description="At Laughing Wood Interiors, we believe in blending artistry with functionality. Our designs are tailored to reflect your personality, ensuring each space tells its own unique story."
                  styles={{
                    title: { color: "var(--color-white)" },
                    description: { color: "var(--color-white)" },
                  }}
                  onAnimationComplete={() => setAnimateButtons(true)}
                />
                <Button
                  style={{ visibility: animateButtons ? "visible" : "hidden" }}
                  text="Explore Our Work"
                  variant="primary"
                  animate={animateButtons}
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="slider-section video-slider">
          <Container fluid>
            <Container>
              <AnimatedSection
                title="Laughing Wood Interiors"
                description="Behind the scenes of our interior designs"
                styles={{
                  title: { fontFamily: "var(--font-secondary)", color: "var(--color-primary)" },
                  description: { color: "var(--color-secondary)" },
                }}
              />
              <CustomSlider type="video" data={videoData} />
            </Container>
          </Container>
        </section>

        <FAQ />
      </LoadingProvider>
    </>
  );
};

export default Home;
