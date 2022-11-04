import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgimage from "../../public/hero-bg.jpg";
import { Button } from "../Button/Button";
import { ReactIcon } from "../ReactIcon/ReactIcon";

// https://api.github.com/users/imran-baitham
const social = [
  "RiFacebookBoxFill",
  "RiTwitterFill",
  "RiInstagramFill",
  "RiLinkedinBoxFill",
  "RiYoutubeFill",
];
function Misc() {
  return (
    <div className="w-full bg-gray-100 dark:bg-zinc-900 py-20 mb-8">
      <div className="container_main w-full md:flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-80 h-80 rounded-full border-4 border-white custom-shadow relative overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
            src={bgimage.src}
            alt=""
          />
        </div>
        <div className="ml-6">
          <h1 className="uppercase font-[900] text-4xl">imran baitham</h1>
          <div className="flex py-1">
            <span>{" ️‍🔥 "}</span>
            <h2 className="pl-1 text-gray-600">
              Senior Software Engineer @ North Aims
            </h2>
          </div>
          <h2 className="py-1">
            Author of 150k ★️ javascript-algorithms repo on GitHub
          </h2>
          <div className="flex py-1 items-center text-gray-600">
            <ReactIcon icon="MdMyLocation" />
            <h2 className="pl-1">Amsterdam, The Netherlands</h2>
          </div>
          <div className="flex py-2">
            <Button sm>Full Stack</Button>
            <Button sm className="ml-1">
              JavaScript
            </Button>
            <Button sm className="ml-1">
              React
            </Button>
          </div>
          <div className="flex py-1">
            {social.map((links: string | any) => {
              return (
                <div key={links}>
                  <ReactIcon icon={links} className={"w-6 h-6 pl-1"} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Misc;
