import React from 'react';
import './alumni.styles.scss';
import { alumni } from '../../data/alumni';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Alumni = () => {
  return (
    <div className="alumni">
      <h1>
        What Our Alumni Say About AMV UI <div />
      </h1>

      <div className="alumni__list">
        <Swiper
          autoplay={{
            delay: 7500,
            disableOnInteraction: false
          }}
          spaceBetween={10}
          loop={true}
          pagination={true}
          className="alumni__swiper">
          {alumni.map((alum) => (
            <SwiperSlide className="alumni__slide">
              <div className="alumni-card">
                <div className="alumni-card__photo">
                  <img src={alum.url} alt="alumni" />
                  <h2>{alum.name}</h2>
                  <span>{alum.role}</span>
                </div>
                <div className="alumni-card__content">
                  <i className="fas fa-quote-right"></i>
                  <div className="alumni-card__content--text">
                    <h2>{alum.title}</h2>
                    <p>{alum.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Alumni;
