/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../components";
import { DemoData } from "./data";

export interface DataProps {
  id?: number;
  title?: string;
  subtitle?: string;
  image?: any;
}
function Index() {
  const [data, setData] = useState(DemoData);
  const [visible, setVisible] = useState(9);

  data.length >= visible ? "" : document.querySelector(".lord-more")?.remove();

  const handleload = () => {
    setVisible((prev) => prev + 3);
  };
  
  return (
    <div className="dark:bg-zinc-800 bg-white">
      <div className="container_main">
        <h1 className="text-yellow-400 font-bold text-4xl">Letest Article</h1>
        <div className="py-8">
          <div className="grid gap-3 lg:m-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {data
              ?.slice(0, visible)
              .map(
                (x: {
                  id: number;
                  title: string;
                  subtitle: string;
                  imageUrl: any;
                  date: string;
                  view: number;
                  slug: string;
                }) => {
                  return (
                    <div
                      className="shadow rounded cursor-pointer hover:shadow-xl dark:bg-zinc-700"
                      key={x.id}
                    >
                      <div className="bg-gray-800 rounded">
                        <img
                          src={x.imageUrl.src}
                          alt=""
                          className="lg:h-[200px] m-auto"
                        />
                      </div>
                      <div className="p-3 h-[150px]">
                        <h2 className="font-bold text-xl">
                          {x.title?.length > 46
                            ? x.title.slice(0, 50) + " ..."
                            : x.title}
                        </h2>
                        <p className="text-sm pt-2 dark:text-gray-200 text-gray-600">
                          {x.subtitle?.length > 130
                            ? x.subtitle.slice(0, 130) + " ..."
                            : x.subtitle}
                        </p>
                      </div>
                      <div className="p-3 dark:text-yellow-300 text-yellow-600 justify-between items-center flex">
                        <Link href={`/blogs/${[x.slug]}`} passHref>
                          <a href="">😍 Read article</a>
                        </Link>
                        <a
                          href="#"
                          className="dark:text-white text-black text-[12px] "
                        >
                          {x.date}
                        </a>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
          <div className="w-full my-10 flex justify-center lord-more">
            <Button xl onClick={handleload}>
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
