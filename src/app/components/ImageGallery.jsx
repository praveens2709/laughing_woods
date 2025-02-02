'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import '@styles/portfolio.scss';
import { portfolioImages } from '@utils/data';

export default function ImageGallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="image-gallery">
      {portfolioImages.map((image, index) => (
        <div key={index} className="image-container shine-hover" onClick={() => handleOpen(index)}>
          <Image
            src={image}
            alt={`Project ${index + 1}`}
            className="portfolio-image"
            fill
          />
          <div className="overlay">
            <span className="overlay-text">View Project</span>
          </div>
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={portfolioImages.map((src) => ({ src }))}
        index={currentIndex}
        plugins={[Fullscreen, Zoom]}
      />
    </div>
  );
}
