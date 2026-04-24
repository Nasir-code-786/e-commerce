"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const HomeSlider = () => {
  return (
    <div className="homeSlider">
      <div className="container">
        <Swiper 
            navigation={true} 
            modules={[Navigation,Autoplay]} 
            className="mySwiper"
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
        >
          <SwiperSlide>
            <div className="item">
              <Image
                src="/slide1.png"
                alt="slide1"
                width={1344}
                height={514}
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <Image
                src="/slide1.png"
                alt="slide1"
                width={1344}
                height={514}
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <Image
                src="/slide1.png"
                alt="slide1"
                width={1344}
                height={514}
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
