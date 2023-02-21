import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import 'swiper/less/navigation';

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

const imagedatalink = [
    "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_fantastic_sale_spr_desktop1675949248562.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/hp-banner_994x3991676022239483.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_exam_18thfeb1676619298098.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_flat40_spr_desktop1676886628399.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/merchf_hp_default_soi23_buy2_1701231673929959347.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_happy_hour_desktop1673502140093.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/hp_merch_p10_harry_desktop1674057444324.webp"

]

export default function Carousel() {
  // console.log(Swiper)
  return (
    <>
      <Swiper
        style={{"z-index":-1}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
          {
            imagedatalink.map((data,index)=>{
              return <SwiperSlide key={index+1}>
                        <Image sx={{cursor:"pointer",width:"80vw", height:"65vh"}} src={data} alt={`image${index}`}/>
                      </SwiperSlide>
            })
          }
      </Swiper>
    </>
  );
}