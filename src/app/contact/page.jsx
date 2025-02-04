'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import GoogleMap from '@components/GoogleMap';
import "@styles/contact.scss";
import AnimatedSection from '@components/AnimatedSection';
import Button from '@components/Button';
import contactUs from "@assets/images/hero16.jpg"
import HeroSection from '@components/Hero';
import "@styles/_hero.scss";

export default function Contact() {
    const [animateButtons, setAnimateButtons] = useState(false);

    return (
        <>
            <HeroSection
                title="Get in Touch"
                description="Have a project in mind or need expert advice? Contact us today, and let’s create a space that inspires."
                backgroundClass="contact-banner"
                isLoading={false}
                styles={{
                    title: { color: "var(--color-white)", textAlign: "center" },
                    description: { color: "var(--color-white)", textAlign: "center" },
                }}
            />
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="contact-form">
                            <AnimatedSection
                                sectionType="primary"
                                subtitle="Let's Discuss Your Project"
                                title="Bringing Your Vision to Life"
                                description="Whether it's a residential space or a commercial project, our team is here to assist you. Reach out and let's collaborate to create something extraordinary."
                                animationDelay={1000}
                                styles={{
                                    subtitle: { color: "var(--color-primary)" },
                                    title: { color: "var(--color-primary)" },
                                    description: { color: "var(--color-black)" },
                                }}
                                onAnimationComplete={() => setAnimateButtons(true)}
                            />

                            <form>
                                <div className='d-md-flex justify-content-between gap-4'>
                                    <input type="text" placeholder="Your Name" required className="mb-md-3 mb-4" />
                                    <input type="text" placeholder="Your Phone" required className="mb-3" />
                                </div>
                                <input type="email" placeholder="Your Email" required className="mb-3" />
                                <textarea rows={4} placeholder="Your Message" required className="mb-3"></textarea>

                                <div
                                    className="buttons d-flex gap-3"
                                    style={{ visibility: animateButtons ? "visible" : "hidden" }}
                                >
                                    <Button text="Send Message" variant="primary" animate={animateButtons} />
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col lg={6} className="contact-image">
                        <Image
                            src={contactUs}
                            alt="Interior Design Consultation"
                            width={600}
                            height={400}
                            className="img-fluid"
                            priority
                        />
                    </Col>
                </Row>
                <div className="mt-5">
                    <GoogleMap />
                </div>
            </Container>
        </>
    );
}