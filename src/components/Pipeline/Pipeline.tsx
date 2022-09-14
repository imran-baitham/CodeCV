/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { classNames } from "../Utils/Utils";
import { overrideTailwindClasses } from "tailwind-override";

const navigation = {
  framework: [
    {
      id: 2,
      name: "Astro",
      href: "#",
      class: "bg-black text-white dark:bg-red-900",
    },
    {
      id: 3,
      name: "HTML5",
      href: "#",
      class: "bg-purple-700 text-white",
    },
    {
      id: 4,
      name: "Express Js",
      href: "#",
      class: "bg-red-400 text-white",
    },
    {
      id: 5,
      name: "React Js",
      href: "#",
      class: "bg-blue-700 text-white",
    },
    {
      id: 6,
      name: "CSS",
      href: "#",
      class: "bg-blue-900 text-white",
    },
    {
      id: 7,
      name: "Node Js",
      href: "#",
      class: "bg-green-900 text-white",
    },
  ],
  latest: [
    {
      id: 8,
      name: "Node Js",
      href: "#",
      class: "bg-green-900 text-white",
    },
    {
      id: 9,
      name: "Astro",
      href: "#",
      class: "bg-black text-white dark:bg-red-900",
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
  return (
    <div className="container_main py-12">
      <h1 className="text-yellow-400 font-bold text-4xl text-center">
        FrameWorks
      </h1>
      <div className="pt-4">
        <div className="mt-8 flex justify-center space-x-2">
          {navigation.framework.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={overrideTailwindClasses(
                classNames(
                  "border-1 border border-black p-2 flex font-bold text-2xl rounded",
                  `${item.class}`
                )
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="mt-3 flex justify-center space-x-2">
          {navigation.latest.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={overrideTailwindClasses(
                classNames(
                  "border-1 border border-black p-2 flex font-bold text-2xl rounded",
                  `${item.class}`
                )
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="mt-3 flex justify-center space-x-2">
          {navigation.framework.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={overrideTailwindClasses(
                classNames(
                  "border-1 border border-black p-2 flex font-bold text-2xl rounded",
                  `${item.class}`
                )
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="mt-3 flex justify-center space-x-2">
          {navigation.latest.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={overrideTailwindClasses(
                classNames(
                  "border-1 border border-black p-2 flex font-bold text-2xl rounded",
                  `${item.class}`
                )
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pipeline;
