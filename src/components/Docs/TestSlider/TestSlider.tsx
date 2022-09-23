/* eslint-disable react/jsx-key */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import { Prism } from "@mantine/prism";
import { useTheme } from "next-themes";

export default function TestSlider() {
  let data = [
    {
      id: 1,
      title: "Index.html",
      language: "jsx",
      CodeLogs: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width">
          <title>Document</title>
      </head>
      <body>
          <h1>Hello World</h1>
          <p>Learning Today, Leading Tomorrow</p>
          <article>In times of drastic change, it is the<br/>
          learners who inherit the future. Learners usually 
          find themselves equipped to live in a world that
          no longer exists.</article>
      </body>
      </html>`,
    },
    {
      id: 1,
      title: "Style.css",
      language: "css",
      CodeLogs: `* {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    
    html {
      scroll-behavior: smooth;
      user-select: none;
    }
    
    body {
      font-family: "Poppins", sans-serif;
      font-size: larger;
      background-color: whitesmoke;
      transition: all 0.4s;
    }`,
    },
    {
      id: 1,
      title: "app.js",
      language: "jsx",
      CodeLogs: `let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4

// How to use variables:
x = 5;
y = 6;
let z = x + y;

let lastName = "Imran";
// The let keyword was introduced in ES6 (2015).
const lastname = "Baitham";
//The const keyword was introduced in ES6 (2015).

alert("Hello World")
// The alert was introduced in 2015.
    `,
    },
  ];
  const { theme } = useTheme();

  return (
    <>
      <div className="container_div">
        <div className="md:w-[580px]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {data?.map(
              (x: {
                id: number;
                title: string;
                language: Language | string;
                CodeLogs: any;
              }) => {
                return (
                  <SwiperSlide key={x.id} className={"w-full"}>
                    <div className="relative z-10 dark:bg-gray-800 bg-gray-300 rounded-lg custom-shadow opacity-100">
                      <div className="flex items-center">
                        <div className="flex items-center space-x-2 p-3">
                          <div className="bg-red-500 rounded-full w-3 h-3"></div>
                          <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                          <div className="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <h1 className="flex items-center w-30 h-full justify-center rounded dark:text-yellow-500 text-yellow-700 px-2">
                            {x.title}
                          </h1>
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-lg">
                        <Prism
                          withLineNumbers
                          colorScheme={theme === "light" ? "light" : "dark"}
                          language={x.language}
                        >
                          {x.CodeLogs}
                        </Prism>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
}
