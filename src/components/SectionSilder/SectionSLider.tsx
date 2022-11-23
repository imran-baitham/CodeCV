/* eslint-disable @next/next/no-img-element */
import React from "react";
import images from "../../public/SliderImages/silder1.jpg";
import imagesone from "../../public/SliderImages/silder2.jpg";
import imagestwo from "../../public/SliderImages/silder3.jpg";
import imagesthree from "../../public/SliderImages/silder4.jpg";
import imagesfore from "../../public/SliderImages/silder5.jpg";
import imagesfive from "../../public/SliderImages/silder6.jpg";
import imagessix from "../../public/SliderImages/silder7.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";

/* eslint-disable-next-line */
export interface CarouselProps {}

let data = [
  { id: 1, name: "Html5", image: images },
  { id: 2, name: "Css3", image: imagesone },
  { id: 3, name: "JavaScript", image: imagestwo },
  { id: 4, name: "React Js", image: imagesthree },
  { id: 5, name: "Sass", image: imagesfore },
  { id: 6, name: "Node Js", image: imagesfive },
  { id: 7, name: "Vue Js", image: imagessix },
];

export default function SectionSlider(props: CarouselProps) {
  return (
    <div className="bg-red-">
      <div className="mx-5">
        <div className="py-8">
          <h1 className="text-yellow-400 font-bold text-4xl container_main text-center">
            Code Journey Earn Money
          </h1>
        </div>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            // dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 3,
            },
            "@0.75": {
              slidesPerView: 4,
            },
            "@1.00": {
              slidesPerView: 5,
            },
            "@1.50": {
              slidesPerView: 6,
              spaceBetween: 15,
            },
          }}
        >
          {data.map((x) => {
            return (
              <SwiperSlide key={x.id}>
                <div className="mb-20">
                  <div className="w-full h-full lg:relative absolute shadow-lg overflow-hidden">
                    <img src={x.image.src} alt="" className="rounded-md" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
