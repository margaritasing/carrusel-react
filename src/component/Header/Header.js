import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";


import Imagen from "../ImgCity/Bangkok.jpg";
import Imagen1 from "../ImgCity/Barcelona.jpg";
import Imagen2 from "../ImgCity/Berlin.jpg";
import Imagen3 from "../ImgCity/Brasilia.jpg";
import Imagen4 from "../ImgCity/Sidney.jpg";
import Imagen5 from "../ImgCity/London.jpg";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Header() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={Imagen} alt=""/> </SwiperSlide>
        <SwiperSlide><img src={Imagen1} alt=""/> </SwiperSlide>
        <SwiperSlide><img src={Imagen2} alt=""/> </SwiperSlide>
        <SwiperSlide><img src={Imagen3} alt=""/> </SwiperSlide>
        <SwiperSlide><img src={Imagen4} alt=""/> </SwiperSlide>
        <SwiperSlide><img src={Imagen5} alt=""/> </SwiperSlide>
        
      </Swiper>
    </>
  );
}
