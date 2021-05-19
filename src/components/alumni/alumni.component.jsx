import React from 'react';
import bos from '../../assets/bos.png';
import './alumni.styles.scss';

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
          <SwiperSlide className="alumni__slide">
            <div className="alumni-card">
              <div className="alumni-card__photo">
                <img src={bos} />
                <h2>Hansel Matthew</h2>
                <span>Team Leader AMV UI 2020/2021</span>
              </div>
              <div className="alumni-card__content">
                <i class="fas fa-quote-right"></i>
                <div className="alumni-card__content--text">
                  <h2>Lorem Ipsum Sir Dolor Amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut. Lorem ipsum dolor sit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut. Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Alumni;
