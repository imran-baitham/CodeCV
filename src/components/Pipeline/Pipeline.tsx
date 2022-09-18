/* eslint-disable react/jsx-key */
/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { classNames } from "../Utils/Utils";
import { overrideTailwindClasses } from "tailwind-override";

const navigation = {
  basic: [
    {
      id: 2,
      name: "Html5",
      href: "#",
      class: "bg-orange-500 text-white",
    },
    {
      id: 3,
      name: "Css",
      href: "#",
      class: "bg-sky-600 text-white",
    },
    {
      id: 4,
      name: "JavaScript",
      href: "#",
      class: "bg-yellow-400 text-black",
    },
    {
      id: 6,
      name: "TypeScript",
      href: "#",
      class: "bg-blue-900 text-white",
    },
    {
      id: 5,
      name: "React Js",
      href: "#",
      class: "bg-blue-400 text-white",
    },
    {
      id: 7,
      name: "Next Js",
      href: "#",
      class: "bg-black text-gray-300",
    },
  ],
  latest: [
    {
      id: 8,
      name: "Node Js",
      href: "#",
      class: "bg-green-800 text-white",
    },
    {
      id: 9,
      name: "Python",
      href: "#",
      class: "bg-gradient-to-r from-blue-700 to-yellow-800 text-white",
    },
    {
      id: 10,
      name: "React Js",
      href: "#",
      class: "bg-blue-700 text-white",
    },
    {
      id: 11,
      name: "CSS",
      href: "#",
      class: "bg-blue-900 text-white",
    },
    {
      id: 11,
      name: "JavaScript",
      href: "#",
      class: "bg-yellow-600 text-white",
    },
  ],
};

function Pipeline() {
  // const defaultShapes = [
  //   ["line", "circle", "line", "line"],
  //   ["line", "line", "circle", "line"],
  //   ["line", "circle", "line", "line"],
  // ];
  return (
    <div className="container_main py-12">
      <h1 className="text-yellow-400 font-bold text-4xl text-center mb-8">
        FrameWorks
      </h1>
      <div className="pt-4">
        <h1 className="md:hidden font-bold text-2xl mb-5">Front End</h1>
        <div className="lg:flex justify-center lg:space-x-2 grid gap-2 grid-cols-2 md:grid-cols-3">
          {navigation.basic.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={overrideTailwindClasses(
                classNames(
                  "px-4 py-3 flex font-bold text-2xl rounded uppercase",
                  `${item.class}`
                )
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="pt-6">
        <h1 className="md:hidden font-bold text-2xl mb-5">Back End</h1>
        <div className="lg:flex justify-center lg:space-x-2 grid gap-2 grid-cols-2 md:grid-cols-3">
          {navigation.latest.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={overrideTailwindClasses(
                classNames(
                  "px-4 py-3 flex font-bold text-2xl rounded uppercase",
                  `${item.class}`
                )
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {/* <div>
        {defaultShapes.map((shape) => {
          return (
            <div className="flex items-center justify-center">
              {shape.map((item) => {
                return (
                  <div className="w-full contents">
                    {item === "circle" ? (
                      <div className="bg-blue-900 border-1 border border-black px-4 py-3 flex font-bold text-2xl rounded">
                        <div>asdf</div>
                      </div>
                    ) : (
                      <div className="flex m-2 bg-red-900 border-1 border border-black px-4 py-3 flex font-bold text-2xl rounded">
                        <div>asdfasdf</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Pipeline;
