import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import bgimage from "../../public/hero-bg.jpg";
import ownerimage from "../../public/imranbaitham.jpg";
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

const linksButton = [
  { id: 1, name: "Full Stack", link: "/" },
  { id: 1, name: "JavaScript", link: "/" },
  { id: 1, name: "React Js", link: "/" },
];

function Misc() {
  return (
    <div className="w-full bg-gray-100 dark:bg-zinc-900 py-20 mb-8">
      <div className="container_main w-full md:flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-white custom-shadow relative overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
            src={ownerimage.src}
            alt=""
          />
        </div>
        <div className="md:ml-6 mt-8">
          <h1 className="uppercase text-4xl font-['Nosifer']">imran baitham</h1>
          <div className="flex py-1">
            <span>{" ️‍🔥 "}</span>
            <h2 className="pl-1 text-gray-600 dark:text-gray-300">
              Senior Software Engineer @North Aims Technologies
            </h2>
          </div>
          <h2 className="py-1">
            Author of 150k ★️ javascript-algorithms repo on{" "}
            <a
              href="https://github.com/imran-baitham"
              className="text-blue-800 dark:text-blue-300"
            >
              GitHub
            </a>
          </h2>
          <div className="flex py-1 items-center text-gray-600 dark:text-gray-300">
            <ReactIcon icon="MdMyLocation" />
            <h2 className="pl-1">Gilgit City, The Pakistan</h2>
          </div>
          <div className="md:flex">
            {linksButton.map((links) => {
              return (
                <div key={links.id}>
                  <Button sm className="ml-1 my-2">
                    {links.name}
                  </Button>
                </div>
              );
            })}
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
