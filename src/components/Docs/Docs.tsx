import React from "react";
import Typewriter from "typewriter-effect";
import ParallaxImagesContainer from "./Tesxtbg";
export function Docs() {
  return (
    <div className="container_main w-full grid grid-cols-1 md:grid-cols-2 pb-[80px]">
      <div className="">
        <h1 className="font-bold text-4xl leading-[100px]">Hi 👋🏼, I'm</h1>
        <h1 className="font-bold text-4xl underline underline-offset-[15px] z-0">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Full Stack Developer",
                "Front End Developer",
                "Back End Developer",
                "Software Developer",
                "Youtuber",
                "Technical writer",
                "Contact writer",
                "Web3 enthusiast",
              ],
            }}
          />
        </h1>
        <div className="mt-10 h-auto p-2 bg-gradient-to-r from-purple-500 to-pink-500">
          <p className="font-medium leading-[25px]">
            Welcome to my digital garden where I share what I'm learning about
            shipping great products, becoming a better developer and growing a
            career in tech.
          </p>
        </div>
      </div>
      <div className="">
        <ParallaxImagesContainer />
      </div>
    </div>
  );
}

{
  /* <img
          src={laptop.src}
          alt="image laptop"
          datatype="2"
          className="h-[300px] object"
        />
      </div> */
}
