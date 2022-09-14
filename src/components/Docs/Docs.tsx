import React from "react";
import Typewriter from "typewriter-effect";

export function Docs() {
  return (
    <div className="container_main w-full flex justify-between pb-[80px]">
      <div className="text-left">
        <h1 className="font-bold text-4xl leading-[100px]">Hi 👋🏼, I'm</h1>
        <h1 className="font-bold text-4xl underline underline-offset-[15px]">
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
      </div>
    </div>
  );
}
