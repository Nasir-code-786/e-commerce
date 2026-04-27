"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { ProductItem } from "./ProductItem";

export const ProductSlider = () => {
  return (
    <div className="productSlider py-5">
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="py-3 px-2">
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide className="py-3 px-2">
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide className="py-3 px-2">
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide className="py-3 px-2">
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide className="py-3 px-2">
            <ProductItem/>
        </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
            <ProductItem/>
        </SwiperSlide>
            <SwiperSlide className="py-3 px-2">
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide className="py-3 px-2">
            <ProductItem/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
