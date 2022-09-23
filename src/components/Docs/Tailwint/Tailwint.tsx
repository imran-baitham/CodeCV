import React from "react";
import alpine from "../../../public/assets/alpine.png";
import javaimage from "../../../public/assets/javascript.png";
import flutter from "../../../public/assets/flutter.png";
import svelte from "../../../public/assets/svelte.png";
import tailwindimg from "../../../public/assets/tailwindcss.png";
import vuejs from "../../../public/assets/vuejs.png";
import laptop from "../../../public/World.png";
import bgimage from "../../../public/hero-bg.jpg";
import TestSlider from "../TestSlider/TestSlider";
// import imageone from "../../../public/assets/pexels-michael-block-3225517.jpg";

function Tailwint() {
  return (
    <div className="pr-[1rem] overflow-hidden">
      <div className="py-20 container_div overflow-visible w-full h-screen md:h-[780px] dark:bg-zinc-800 md:flex flex-col-reverse md:flex-row justify-center items-center overflow-hidden">
        <TestSlider />

        <div className="w-full md:w-1/2 flex justify-center items-center transform scale-75 md:scale-125 translate-x-0 md:translate-x-40 translate-y-20 md:translate-y-2 hidden md:flex">
          <img
            className="w-80 h-80 rounded-full border-4 border-white custom-shadow"
            src={bgimage.src}
            alt=""
          />

          <div className="hw-inner flex justify-between items-center absolute border dark:border-white border-gray-800 rounded-full animate-spin-slow anim-8s">
            <div className="bg-white p-1 rounded-full custom-shadow h-10 w-10  transform -translate-x-5 ">
              <img
                className="h-9 w-9 object-center animate-rotate-img anim-8s"
                src={alpine.src}
                alt=""
              />
            </div>
            <div className="bg-white overflow-hidden rounded-full custom-shadow h-10 w-10 transform translate-x-5 ">
              <img
                className="h-10 w-10 object-center animate-rotate-img anim-8s"
                src={javaimage.src}
                alt=""
              />
            </div>
          </div>

          <div className="hw-outer flex justify-between items-center absolute border dark:border-white border-gray-800 rounded-full animate-spin-slow ">
            <div className="flex justify-between items-center h-full w-full">
              <div className="bg-white p-1 rounded-full custom-shadow h-10 w-10  transform translate-x-8 translate-y-40 ">
                <img
                  className="h-full w-full object-center animate-rotate-img "
                  src={flutter.src}
                  alt=""
                />
              </div>
              <div className="bg-white overflow-hidden p-1 rounded-full custom-shadow h-10 w-10 transform -translate-x-8 -translate-y-40 ">
                <img
                  className="h-full w-full object-center animate-rotate-img"
                  src={svelte.src}
                  alt=""
                />
              </div>
            </div>

            <div className="absolute flex justify-between items-center h-full w-full">
              <div className="bg-white p-1 rounded-full custom-shadow h-10 w-10  transform translate-x-8 -translate-y-40">
                <img
                  className="h-full w-full object-center animate-rotate-img "
                  src={tailwindimg.src}
                  alt=""
                />
              </div>
              <div className="bg-white overflow-hidden p-1 rounded-full custom-shadow h-10 w-10 transform -translate-x-8 translate-y-40 ">
                <img
                  className="h-full w-full object-center animate-rotate-img "
                  src={vuejs.src}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tailwint;
