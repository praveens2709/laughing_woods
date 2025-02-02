import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = ({ type, data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="custom-swiper"
    >
      {Array.isArray(data) &&
        data.map((item, index) => (
          <SwiperSlide key={index}>
            {type === 'image' ? (
              <div className="shine-hover">
                <div className="image-wrapper">
                  <Image
                    src={item}
                    alt={`Slide ${index + 1}`}
                    width={500}
                    height={300}
                    layout="intrinsic"
                    className="portfolio-image"
                    objectFit="cover"
                  />
                </div>
              </div>
            ) : type === 'video' ? (
              <div className="single-video-item">
                <div className="video-div">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <div className="shine-hover">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={480}
                        height={360}
                        onError={(e) =>
                          (e.target.src = 'https://via.placeholder.com/480x360?text=No+Thumbnail')
                        }
                        objectFit="contain"
                      />
                    </div>
                  </a>
                  <p className="video-heading">{item.title}</p>
                </div>
              </div>
            ) : null}
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
