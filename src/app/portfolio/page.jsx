'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import ImageGallery from '@components/ImageGallery';
import AnimatedSection from '@components/AnimatedSection';
import '@styles/portfolio.scss';

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-bg">
        <Container className='portfolio'>
          <AnimatedSection
            title="Our Portfolio"
            description="Explore some of our latest projects, showcasing our expertise in interior design and space transformation."
            styles={{
              title: { color: 'var(--color-white)', textAlign: 'center' },
              description: { color: 'var(--color-white)', textAlign: 'center' },
            }}
          />
        </Container>
      </section>
      <section>
        <Container className='portfolio-container'>
          <ImageGallery />
        </Container>
      </section>
    </>
  );
}
