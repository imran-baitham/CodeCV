import Image from "next/image";
import React, { useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
import css from "../../public/programminglanguage/css.png";
import cpp from "../../public/programminglanguage/cpp.png";
import git from "../../public/programminglanguage/git.png";
import javascript from "../../public/programminglanguage/javascript.png";
import html from "../../public/programminglanguage/html.png";
import node from "../../public/programminglanguage/node.png";
import python from "../../public/programminglanguage/python.png";
import react from "../../public/programminglanguage/react.png";
import redux from "../../public/programminglanguage/redux.png";
import sass from "../../public/programminglanguage/sass.png";
import vue from "../../public/programminglanguage/vue.png";
import mui from "../../public/programminglanguage/mu5.png";
import figma from "../../public/programminglanguage/figma.png";
import graphql from "../../public/programminglanguage/graphql.png";

let data = [
  { id: 1, name: "Html5", image: html },
  { id: 2, name: "Css3", image: css },
  { id: 3, name: "JavaScript", image: javascript },
  { id: 4, name: "React Js", image: react },
  { id: 5, name: "Sass", image: sass },
  { id: 6, name: "Node Js", image: node },
  { id: 7, name: "Vue Js", image: vue },
  { id: 8, name: "Figma", image: figma },
  { id: 9, name: "Mui", image: mui },
  { id: 10, name: "GraphQl", image: graphql },
  { id: 11, name: "Git", image: git },
  { id: 12, name: "C++", image: cpp },
  { id: 13, name: "Python", image: python },
  { id: 14, name: "Redux", image: redux },
];

function SmallTags() {
  const [count, setCount] = useState(Math.floor(Math.random() * 100));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      const logic = Math.floor(Math.random() * 10);
      setCount(logic + 1 * 10);
    }, 100);
  },[count,Infinity]);

  const Random = [
    { id: 1, logic: count },
    { id: 2, logic: count },
    { id: 3, logic: count },
    { id: 4, logic: count },
    { id: 5, logic: count },
    { id: 6, logic: count },
    { id: 7, logic: count },
    { id: 8, logic: count },
    { id: 9, logic: count },
    { id: 10, logic: count },
  ];

  return (
    <div>
      <div className="p-10 min-h-screen flex items-center justify-center dark:bg-gray-500 bg-gray-100">
        {/*  =========={  Transform Utilites  }==========  */}
        <div className="grid grid-cols-5 gap-10">
          {data.map((item: { id: number; name: string; image: any }) => {
            return (
              <div className="h-32 w-32 relative group" key={""}>
                <div className="absolute inset-0 bg-yellow-600 rounded-lg shadow-2xl border-2 border-black"></div>
                <div className="transform group-hover:translate-y-1 group-hover:translate-x-1 transition duration-300 dark:bg-zinc-800 bg-white absolute h-full w-full">
                  <div className="h-full w-full rounded-lg shadow-2xl relative overflow-hidden">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      objectPosition={"center"}
                      src={item.image.src}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-10 min-h-screen flex items-center justify-center">
        {/*  =========={  Transform Utilites  }==========  */}
        <div className="grid grid-cols-5 gap-10">
          {Random.map((item: { id: number; logic: number }) => {
            return (
              <div className="h-32 w-32 relative group" key={item.id}>
                <div className="absolute inset-0 bg-yellow-600 rounded-lg shadow-2xl"></div>
                <div className="transform group-hover:translate-y-1 group-hover:translate-x-1 transition duration-300 dark:bg-zinc-800 bg-white absolute h-full w-full">
                  <div className="h-full w-full rounded-lg shadow-2xl overflow-hidden">
                    <div className="flex justify-center h-full items-center">
                      <span className="font-bold text-4xl">{item.logic}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SmallTags;
