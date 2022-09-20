/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import Link from "next/link";
import React, { useState } from "react";
import { DemoData } from "../../mocks/mocks";
import Image from "next/image";

export function CourseCard() {
  const [data, setData] = useState(DemoData);

  return (
    <div className="dark:bg-zinc-800 bg-white">
      <div className="container_main">
        {/* <h1 className="text-yellow-400 font-bold text-4xl">Letest Article</h1> */}
        <div className="py-8 px-1">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              // clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            loopFillGroupWithBlank={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
              },
              "@0.75": {
                slidesPerView: 2,
              },
              "@1.00": {
                slidesPerView: 2,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {data?.map(
              (x: {
                id: number;
                title: string;
                subtitle: string;
                imageUrl: any;
                date: string;
                view: number;
                slug: string;
              }) => {
                return (
                  <SwiperSlide key={x.id}>
                    <div className="mb-14">
                      <div
                        className="shadow rounded cursor-pointer hover:shadow-xl dark:bg-zinc-700"
                        key={x.id}
                      >
                        <Image
                          width={500}
                          height={270}
                          src={x.imageUrl}
                          alt={"image"}
                          className="m-auto"
                        />
                        <div className="p-3 h-[80px] flex items-center justify-center">
                          <h1 className="font-bold text-2xl">Pandng Design</h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
