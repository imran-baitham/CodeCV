import React from "react";
import { Button, ReactIcon } from "../../components";

let info = [
  {
    id: 1,
    icon: "BiSupport",
    title: "freefast delivery",
    subTitle: "Support online 24 hours day",
  },
  {
    id: 2,
    icon: "BiSupport",
    title: "freefast delivery",
    subTitle: "Support online 24 hours day",
  },
  {
    id: 3,
    icon: "BiSupport",
    title: "freefast delivery",
    subTitle: "Support online 24 hours day",
  },
  {
    id: 3,
    icon: "BiSupport",
    title: "freefast delivery",
    subTitle: "Support online 24 hours day",
  },
  {
    id: 3,
    icon: "BiSupport",
    title: "freefast delivery",
    subTitle: "Support online 24 hours day",
  },
  {
    id: 3,
    icon: "BiSupport",
    title: "freefast delivery",
    subTitle: "Support online 24 hours day",
  },
  {
    id: 3,
    icon: "BiSupport",
    title: "freefast delivery",
    subTitle: "Support online 24 hours day",
  },
  {
    id: 3,
    icon: "BiSupport",
    title: "freefast delivery",
    subTitle: "Support online 24 hours day",
  },
  {
    id: 3,
    icon: "BiSupport",
    title: "freefast delivery",
    subTitle: "Support online 24 hours day",
  },
];

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function index() {
  return (
    <div className="dark:bg-zinc-800">
      <div className="bg-black flex items-center justify-center overflow-hidden">
        <video
          autoPlay={true}
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full xl:max-w-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-between pt-[53vh]">
        {data.map((x) => {
          return (
            <div key={""}>
              <ReactIcon icon="GiDrippingStar" className="w-6 h-6" />
            </div>
          );
        })}
      </div>
      <div className="container_main py-20">
        <h1 className="text-yellow-400 font-bold text-3xl pb-10 uppercase text-center">
          Our Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {info.map((data: any) => {
            return (
              <div key={data.id}>
                <div className="group border dark:border-zinc-700 border-gray-200 dark:hover:border-yellow-500 hover:border-yellow-500 rounded dark:bg-zinc-700 bg-gray-100 flex p-2 cursor-pointer">
                  <div className="dark:group-hover:bg-zinc-600 group-hover:bg-zinc-200 dark:bg-zinc-900 bg-gray-300 w-20 h-20 flex items-center justify-center rounded-full">
                    <ReactIcon icon={data.icon} className={"w-8 h-8"} />
                  </div>
                  <div className="flex items-center pl-3">
                    <div>
                      <h1 className="uppercase font-bold dark:group-hover:text-yellow-400 group-hover:text-yellow-600">
                        {data.title}
                      </h1>
                      <p>{data.subTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container_main pb-32">
        <h1 className="text-yellow-400 font-bold text-3xl pb-10 uppercase text-center">
          How we work
        </h1>
        <div></div>
      </div>
      <div className="container_main">
        <div className="border flex">
          <div className="w-full border-l-4">image</div>
          <div className="w-full border-l-4">
            <h1>Our History</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis.
          </div>
        </div>

        <div className="py-20">
          <div className="w-full h-32 bg-zinc-700 flex items-center">
            <h1 className="w-full text-yellow-400 font-bold text-2xl uppercase text-center">
              Need Creative Workers?
            </h1>
            <div className="w-full justify-center flex items-center">
              <Button className="px-32">Hire Us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
