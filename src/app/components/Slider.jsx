import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const Slider = ({ type, data }) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          {type === "image" ? (
            <img src={item} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
          ) : type === "video" ? (
            <div>
              <iframe
                width="100%"
                height="500"
                src={item}
                title={`Slide ${index + 1}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
          ) : null}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
