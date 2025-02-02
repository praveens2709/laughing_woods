'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import ImageGallery from '@components/ImageGallery';
import AnimatedSection from '@components/AnimatedSection';
import '@styles/portfolio.scss';

export default function Portfolio() {
  return (
    <section className="portfolio py-5">
      <Container>
        <AnimatedSection
          title="Our Portfolio"
          description="Explore some of our latest projects, showcasing our expertise in interior design and space transformation."
          styles={{
            title: { color: 'var(--color-primary)', fontSize: '2rem', textAlign: 'center' },
            description: { color: 'var(--color-secondary)', fontSize: '1.125rem', textAlign: 'center' },
          }}
        />
        <ImageGallery />
      </Container>
    </section>
  );
}
