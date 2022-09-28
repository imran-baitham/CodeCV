/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Subscribe } from "../../components";
import { GenericLoader } from "../../components/GenericLoader/GenericLoader";
// import Subscribe from "../../components/Subscribe/Subscribe";
import { ViewProjectPreloader } from "./blogsSkeleton/BlogsSkeleton";

export interface DataProps {
  id?: number;
  title?: string;
  subtitle?: string;
  image?: any;
}
function Index() {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(12);
  const [catagory, setCatagory] = useState(data);
  const getData = () => fetch("/api/articles").then((res) => res.json());

  useEffect(() => {
    setTimeout(() => {
      getData().then((product) => setData(product));
    }, 0);
  }, []);

  if (!data)
    return (
      <div className="w-full py-20 dark:bg-zinc-800">
        <div className="container_main">
          <GenericLoader shapes={[["line"], ["line"], ["line"]]} />
          <ul
            role="list"
            className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
          >
            <ViewProjectPreloader />
            <ViewProjectPreloader />
          </ul>
        </div>
      </div>
    );

  if (!catagory) {
    return setCatagory(data);
  }

  data.length >= visible ? "" : document.querySelector(".lord-more")?.remove();

  const handleload = () => {
    setVisible((prev) => prev + 3);
  };
  let btn = [
    { id: 1, name: "All Article or Blogs", catagory: "all" },
    { id: 2, name: "Next Js", catagory: "next" },
    { id: 3, name: "React Js", catagory: "react" },
    { id: 4, name: "Html5", catagory: "html" },
    { id: 4, name: "Css3", catagory: "css" },
    { id: 5, name: "Vue Js", catagory: "vue" },
  ];

  const filterResult = (catItems: string) => {
    if (catItems === "all") {
      return setCatagory(data);
    }
    const result = data?.filter((curData: any) => {
      return curData.catagory === catItems;
    });
    setCatagory(result);
  };

  return (
    <div className="dark:bg-zinc-800 bg-white pt-24">
      <Head>
        <title>Blogs | Coder</title>
        <meta name="description" content="read blogs and blogs" />
        <meta property="og:title" content="blog page website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-gray-400 font-bold md:text-[40px] text-2xl container_main font-['Nosifer']">
        Our Daily Posts
      </h1>
      <div className="container_main py-5">
        <div className="flex-1 bg-red-0 py-4">
          {btn.map((x: any) => {
            return (
              <button
                key={x.id}
                onClick={() => filterResult(x.catagory)}
                className="border-2 border-yellow-900 py-3 px-10 m-[5px] hover:bg-yellow-500 hover:text-black hover:border-yellow-500"
              >
                {x.name}
              </button>
            );
          })}
        </div>
        <div className="py-8">
          <div className="grid gap-3 lg:m-0 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {data &&
              catagory
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
      <Subscribe />
    </div>
  );
}

export default Index;
