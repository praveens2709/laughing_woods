'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import ImageGallery from '@components/ImageGallery';
import '@styles/portfolio.scss';
import HeroSection from '@components/Hero';
import "@styles/_hero.scss";

export default function Portfolio() {
  return (
    <>
      <HeroSection
        title="Our Portfolio"
        description="Explore some of our latest projects, showcasing our expertise in interior design and space transformation."
        backgroundClass="portfolio-bg"
        isLoading={false}
        styles={{
          title: { color: "var(--color-white)", textAlign: "center" },
          description: { color: "var(--color-white)", textAlign: "center" },
        }}
      />
      <section>
        <Container className='portfolio-container'>
          <ImageGallery />
        </Container>
      </section>
    </>
  );
}
