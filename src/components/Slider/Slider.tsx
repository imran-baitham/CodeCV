/* eslint-disable @next/next/no-img-element */
import React from "react";
import css from "../../public/programminglanguage/css.png";
import cpp from "../../public/programminglanguage/cpp.png";
import git from "../../public/programminglanguage/git.png";
import javascript from "../../public/programminglanguage/javascript.png";
import html from "../../public/programminglanguage/html.png";
import node from "../../public/programminglanguage/node.png";
import python from "../../public/programminglanguage/python.png";
import react from "../../public/programminglanguage/react.png";
import redux from "../../public/programminglanguage/redux.png";
import sass from "../../public/programminglanguage/sass.png";
import vue from "../../public/programminglanguage/vue.png";
import mui from "../../public/programminglanguage/mu5.png";
import figma from "../../public/programminglanguage/figma.png";
import graphql from "../../public/programminglanguage/graphql.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { Button } from "../Button/Button";
/* eslint-disable-next-line */
export interface CarouselProps {}

let data = [
  { id: 1, name: "Html5", image: html },
  { id: 2, name: "Css3", image: css },
  { id: 3, name: "JavaScript", image: javascript },
  { id: 4, name: "React Js", image: react },
  { id: 5, name: "Sass", image: sass },
  { id: 6, name: "Node Js", image: node },
  { id: 7, name: "Vue Js", image: vue },
  { id: 8, name: "Figma", image: figma },
  { id: 9, name: "Mui", image: mui },
  { id: 10, name: "GraphQl", image: graphql },
  { id: 11, name: "Git", image: git },
  { id: 12, name: "C++", image: cpp },
  { id: 13, name: "Python", image: python },
  { id: 14, name: "Redux", image: redux },
];
export default function Slider(props: CarouselProps) {
  return (
    <div className="bg-red-00 md:h-[500px]">
      <div className="container_main">
        <div className="py-8">
          <h1 className="text-yellow-400 font-bold text-4xl">Code Journey</h1>
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
              spaceBetween: 20,
            },
          }}
        >
          {data.map((x) => {
            return (
              <SwiperSlide key={x.id}>
                <div>
                  <div className="mb-16 dark:bg-zinc-700 bg-gray-200 p-2 rounded-sm">
                    <Image
                      width={"200px"}
                      height={"190vh"}
                      src={x.image.src}
                      alt="programming language images"
                    />
                    <Button
                      sm
                      full
                      className="rounded-sm uppercase text-[12px] md:text-sm"
                    >
                      {x.name}
                    </Button>
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
