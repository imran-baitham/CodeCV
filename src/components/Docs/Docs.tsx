/* eslint-disable react/jsx-key */
import React from "react";
import Typewriter from "typewriter-effect";
// import ParallaxImagesContainer from "./Tesxtbg";
export function Docs() {
  let data = [
    { id: 1, title: "83+ million", subtitle: "Developers" },
    { id: 1, title: "4+ million", subtitle: "Organizations" },
    { id: 1, title: "200+ million", subtitle: "Repositories" },
    { id: 1, title: "90%", subtitle: "Fortune 100" },
  ];
  return (
    <div className="container_main w-full grid grid-cols-1 md:grid-cols-2 pb-[80px]">
      <div className="">
        <h1 className="font-bold text-4xl leading-[100px] hidden md:block">
          {"Hi 👋🏼, 'm"}
        </h1>
        <h1 className="font-bold text-2xl md:text-4xl underline underline-offset-[15px] z-0">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Learn to Code",
                "Build a career",
                "Gain a skill",
                "Start coding in seconds",
                "Full Stack Developer",
                "Front End Developer",
                "Back End Developer",
                "Software Developer",
                "Technical writer",
                "Contact writer",
                "Web3 enthusiast",
                "Imran Baitham",
              ],
            }}
          />
        </h1>
        <div className="mt-10 mb-24 h-auto">
          <p className="font-medium leading-[25px]">
            Welcome to my digital garden where I share what {"I'm"} learning
            about shipping great products, becoming a better developer and
            growing a career in tech.
          </p>
        </div>
      </div>
      <div className="">
        {/* <ParallaxImagesContainer /> */}
      </div>
      <div className="grid gap-2 grid-cols-2 xl:grid-cols-4 md:w-[650px]">
        {data.map((x) => {
          return (
            <div
              key={x.id}
              className="bg-gradient-to-r from-yellow-500 to-pink-500 p-2"
            >
              <h2 className="font-bold text-xl dark:text-black">{x.title}</h2>
              <p className="dark:text-gray-100 text-sm text-gray-600">
                {x.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
