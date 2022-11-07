/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ReactIcon } from "../../components";
import Accordions from "../../components/Accordion/Accordion";
import { accordionItems } from "../../Trash/accordionList";
import { tempDataProps } from "../../Utils/templeteProps";
import { Loader } from "@mantine/core";

function templetes() {
  const [data, setData] = useState<any>(null);
  const getData = () => fetch("/api/templetes").then((res) => res.json());

  useEffect(() => {
    setTimeout(() => {
      getData().then((product) => setData(product));
    }, 0);
  }, []);

  if (!data)
    return (
      <div className="w-full py-20 dark:bg-zinc-800">
        <div className="container_main flex items-center justify-center h-[736px]">
          <Loader color="gray" size="xl" variant="dots" />
        </div>
      </div>
    );

  const router = useRouter();
  const { slug } = router.query;

  const blogs = data?.find((post: tempDataProps) => post.slug === slug);

  return (
    <div className="py-10 dark:bg-zinc-800" key={blogs.id}>
      <div className="container_main">
        <div className="w-full md:flex justify-between items-top py-14">
          <div className="md:w-[800px]">
            <div>
              <span className="dark:text-yellow-400 text-gray-600">
                {blogs?.subtitle}
              </span>
              <h1 className="text-4xl font-bold py-5 uppercase">
                {blogs?.title}
              </h1>
              <p className="pr-[5rem] text-sm">{blogs?.description}</p>
              <div className="flex w-full my-6">
                <div className="dark:bg-zinc-700 bg-gray-100 flex items-center cursor-pointer dark:hover:text-yellow-400 hover:text-yellow-700 dark:border-yellow-600 border py-2 px-5 rounded">
                  <span>Download</span>
                  <ReactIcon
                    icon="RiFolderDownloadLine"
                    className="ml-2 w-5 h-5"
                  />
                </div>

                <div
                  onClick={() => window.open(blogs?.livelink, "_blank")}
                  className="ml-3 flex items-center cursor-pointer dark:hover:text-yellow-400 hover:text-yellow-700 group dark:border-zinc-700 border py-2 px-5 rounded"
                >
                  <span>Live preview</span>
                  <ReactIcon
                    icon="BsBoxArrowUpRight"
                    className="ml-2 group-hover:animate-pulse w-5 h-5"
                  />
                </div>
              </div>
              <div className="pt-2">
                <h1 className="font-bold py-2">Tags</h1>
                <div className="py-3 grid grid-cols-3 gap-2 pr-5">
                  {blogs?.tags?.map(
                    (tag: { id: number; icon: any; name: string }) => {
                      return (
                        <div
                          key={tag.id}
                          className={"p-1 rounded flex items-center"}
                        >
                          <ReactIcon icon={tag.icon} className="w-7 h-7" />
                          <h1 className="ml-2 text-sm">{tag.name}</h1>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[500px] overflow-hidden w-full mt-10 md:mt-0 grid grid-cols-1 gap-5 p-2 border-l-4 border-yellow-600">
            <div className={"rounded-md"}>
              <img
                src={blogs?.image.src}
                alt="banner image"
                className="rounded-md bg-zinc-700"
              />
            </div>
          </div>
        </div>

        <hr className="border dark:border-zinc-700 border-gray-300 mb-10" />
        <div className="w-full md:flex justify-between items-top">
          <div className="md:w-[400px] text-2xl font-bold pb-7">
            Screenshots
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
            {blogs?.Screenshots?.map((x: { id: number; Screenshot: any }) => {
              return (
                <div
                  key={x.id}
                  className={
                    "rounded-md border dark:border-zinc-700 border-gray-200"
                  }
                >
                  <img src={x.Screenshot.src} alt="" className="rounded-md" />
                </div>
              );
            })}
          </div>
        </div>

        <hr className="border dark:border-zinc-700 border-gray-300 my-14" />
        <div className="w-full md:flex justify-between items-top">
          <div className="md:w-[400px] pb-7">
            <div>
              <span className="dark:text-yellow-400 text-gray-600">
                Frequently asked questions
              </span>
              <h1 className="text-2xl lg:text-4xl font-bold py-5">
                Everything you need to know
              </h1>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-5 md:ml-8">
            <Accordions items={accordionItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default templetes;

// {
//   title: blogs?.accordionList?.map((x: string) => x.title),
//   content: blogs?.accordionList?.map((x: any) => x.content),
// },
