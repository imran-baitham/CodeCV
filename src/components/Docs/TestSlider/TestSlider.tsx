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
            {data?.map((x) => {
              return (
                <SwiperSlide key={x.id} className={"w-full"}>
                  <div className="relative z-10 dark:bg-gray-800 bg-gray-300 rounded-lg custom-shadow opacity-100">
                    <div className="flex items-center">
                      <div className="flex items-center space-x-2 p-3">
                        <div className="bg-red-500 rounded-full w-3 h-3"></div>
                        <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                      </div>
                      <h1 className="dark:text-yellow-500 text-yellow-700">{x.title}</h1>
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <Prism
                        withLineNumbers
                        colorScheme={theme === "light" ? "light" : "dark"}
                        language="tsx"
                      >
                        {x.CodeLogs}
                      </Prism>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="relative w-full md:w-1/2 mt-20 md:mt-0 flex justify-center items-center transform scale-75 md:scale-100">
          <div className="relative z-10 bg-gray-800 rounded-lg w-terminal custom-shadow">
            <div className="flex items-center">
              <div className="flex items-center space-x-2 p-3">
                <div className="bg-red-500 rounded-full w-3 h-3"></div>
                <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                <div className="bg-green-500 rounded-full w-3 h-3"></div>
              </div>
              <h1 className="text-blue-500">tailwind.config.js</h1>
            </div>
            <div className="p-0 h-96 overflow-hidden rounded-lg">
              <div className="bg-gray-800 p-0 text-sm">
                <Prism
                  withLineNumbers
                  colorScheme={theme === "light" ? "light" : "dark"}
                  language="tsx"
                >
                  {CodeLogs}
                </Prism>
              </div>
            </div>
            <pre className="p-0 h-96 overflow-hidden rounded-lg">
              <code className="bg-gray-800 p-0 text-sm">
                asdfasdf asdfasdffa sd fa sd fa sd f
              </code>
            </pre>
          </div>

          <div className="absolute z-0 bg-gray-800 rounded-lg w-terminal h-96 transform rotate-6 translate-x-6 -translate-y-8 opacity-75">
            <div className="flex items-center space-x-2 p-3">
              <div className="bg-red-500 rounded-full w-3 h-3"></div>
              <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
              <div className="bg-green-500 rounded-full w-3 h-3"></div>
            </div>
          </div>
        </div> */
}
