"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import InnerImageZoom from 'react-inner-image-zoom';

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSmall = useRef();

  const goToSlide = (index) => {
    setSlideIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
    zoomSliderSmall.current.swiper.slideTo(index);
  };

  return (
    <div className="imageWrapper w-[30%]">
      <div className="sliderWrapper border border-[rgb(0,0,0,0.2)] p-5 rounded-lg overflow-hidden">
        <Swiper className="bigSlider" ref={zoomSliderBig}>
          <SwiperSlide>
            <div className="item">
              <img
                src={"/productImage1.png"}
                className="w-full"
                alt="product-image"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src={"/productImage1.png"}
                className="w-full"
                alt="product-image"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src={"/productImage1.png"}
                className="w-full"
                alt="product-image"
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="smallSliderWrapper pt-4">
        <Swiper
          className="smlSlider"
          spaceBetween={10}
          slidesPerView={5}
          ref={zoomSliderSmall}
        >
          <SwiperSlide>
            <div
              className={`item border ${slideIndex === 0 ? "border-[rgb(0,0,0,0.4)]" : "border-[rgb(0,0,0,0.2)]"} p-3 cursor-pointer rounded-md`}
              onClick={() => goToSlide(0)}
            >
              <Image
                src={"/productImage1.png"}
                className="w-full"
                alt="product-image"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item border ${slideIndex === 1 ? "border-[rgb(0,0,0,0.4)]" : "border-[rgb(0,0,0,0.2)]"} p-3 cursor-pointer rounded-md`}
              onClick={() => goToSlide(1)}
            >
              <Image
                src={"/productImage1.png"}
                className="w-full"
                alt="product-image"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item border ${slideIndex === 2 ? "border-[rgb(0,0,0,0.4)]" : "border-[rgb(0,0,0,0.2)]"} p-3 cursor-pointer rounded-md`}
              onClick={() => goToSlide(2)}
            >
              <Image
                src={"/productImage1.png"}
                className="w-full"
                alt="product-image"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item border ${slideIndex === 3 ? "border-[rgb(0,0,0,0.4)]" : "border-[rgb(0,0,0,0.2)]"} p-3 cursor-pointer rounded-md`}
              onClick={() => goToSlide(3)}
            >
              <Image
                src={"/productImage1.png"}
                className="w-full"
                alt="product-image"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item border ${slideIndex === 4 ? "border-[rgb(0,0,0,0.4)]" : "border-[rgb(0,0,0,0.2)]"} p-3 cursor-pointer rounded-md`}
              onClick={() => goToSlide(4)}
            >
              <Image
                src={"/productImage1.png"}
                className="w-full"
                alt="product-image"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item border ${slideIndex === 5 ? "border-[rgb(0,0,0,0.4)]" : "border-[rgb(0,0,0,0.2)]"} p-3 cursor-pointer rounded-md`}
              onClick={() => goToSlide(5)}
            >
              <Image
                src={"/productImage1.png"}
                className="w-full"
                alt="product-image"
                width={80}
                height={80}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
