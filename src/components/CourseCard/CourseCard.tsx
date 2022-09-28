/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BlogsDataProps } from "../../Utils/blogsTypes";

export function CourseCard() {
  const [data, setData] = useState(null);
  const getData = () => fetch("/api/articles").then((res) => res.json());

  useEffect(() => {
    setTimeout(() => {
      getData().then((product) => setData(product));
    }, 0);
  }, []);

  return (
    <div className="dark:bg-zinc-800 bg-white">
      <div className="container_main">
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
            {data?.map((post: BlogsDataProps) => {
              return (
                <SwiperSlide key={post.id}>
                  <div className="mb-14">
                    <div className="shadow rounded hover:shadow-lg dark:bg-zinc-700">
                      <div className="p-1">
                        <Image
                          width={500}
                          height={270}
                          src={post.imageUrl}
                          alt={"image"}
                          className="m-auto rounded bg-gray-400"
                        />
                      </div>
                      {/* 
                        Recent Future we add status of article live rating which 
                        blogs or article good we give status susscess and poor we 
                        give red or any thing 
                        ====== ( its come form bryan project how we on on that project ) ========

                        <div className={`p-3 border-l-4 border-yellow-500`}> 
                      */}
                      <div className={"p-3"}>
                        <h1 className="font-bold text-xl">{post.title}</h1>
                        <div className="pt-5 pb-1">
                          <Link href={`/blogs/${[post.slug]}`} passHref>
                            <span className="text-yellow-400 cursor-pointer">
                              😍 Read article
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
