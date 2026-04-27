"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const Banners = () => {
  return (
    <div className="py-5 bg-white pt-0">
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href="/" className="item group rounded-md overflow-hidden">
                <img src={"/slide1.png"} alt="banner" className="w-full transition group-hover:scale-105 rounded-md"/>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="py-3 px-2">
            <Link href="/" className="item group rounded-md overflow-hidden">
                <img src={"/slide1.png"} alt="banner" className="w-full transition group-hover:scale-105 rounded-md"/>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="py-3 px-2">
            <Link href="/" className="item group rounded-md overflow-hidden">
                <img src={"/slide1.png"} alt="banner" className="w-full transition group-hover:scale-105 rounded-md"/>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banners;
