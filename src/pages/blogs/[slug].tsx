/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from "next-themes";
import { Prism } from "@mantine/prism";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { CourseCard, ReactIcon } from "../../components";
import { accordionItems } from "../../Trash/accordionList";
import { Loader } from "@mantine/core";
import Head from "next/head";
import Accordions from "../../components/Accordion/Accordion";
import { BlogsDataProps } from "../../Utils/blogsTypes";
import Image from "next/image";

const blogsView = () => {
  const [data, setData] = useState<BlogsDataProps | any>(null);
  const getData = () => fetch("/api/articles").then((res) => res.json());

  useEffect(() => {
    setTimeout(() => {
      getData().then((product) => setData(product));
    }, 0);
  }, []);

  if (!data)
    return (
      <div className="w-full py-20 dark:bg-zinc-800">
        <div className="container_main h-screen ">
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        </div>
      </div>
    );

  const { theme } = useTheme();

  const router = useRouter();
  const { slug } = router.query;
  const blogs = data?.find((article: BlogsDataProps) => article.slug === slug);

  // var jsonData = JSON.stringify(blogs.description)

  let CodeLogs = `
  const Hydrated = ({ children }: { children?: any }) => {
    const [hydration, setHydration] = useState<boolean>(false);
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        setHydration(true);
      }
    }, []);
    return hydration ? children : <div></div>;
  };
  `;
  const newArray = [
    { id: 12, icons: "AiFillLike" },
    { id: 12, icons: "AiTwotoneDislike" },
    { id: 12, icons: "MdMessage" },
    { id: 12, icons: "RiMenuFoldLine" },
    { id: 12, icons: "ImBookmark" },
  ];
  return (
    <div className="dark:bg-zinc-800 bg-white">
      <Head>
        <title>Coder | {blogs?.title}</title>
        <meta name="description" content={`Learn more about ${blogs?.title}`} />
        <meta
          property="og:title"
          content={`${blogs?.title} blog page website`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {blogs?.bgImageUrl && (
        <div className="w-full h-[400px] border-4 border-white custom-shadow relative">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
            src={blogs?.bgImageUrl}
            alt=""
          />
          <h1 className="flex items-center h-full w-full justify-center font-bold text-4xl text-black relative">
            Welcome Guest 🥳
          </h1>
        </div>
      )}

      {blogs?.NetlifyBlog && (
        <div className="dark:bg-zinc-900 bg-zinc-600 h-48 flex items-center justify-center">
          <h1 className="font-bold text-4xl text-white">
            {blogs?.NetlifyBlog}
          </h1>
        </div>
      )}
      <div className="container_main pb-10 md:flex justify-between">
        <div className="py-10 mr-2 hidden lg:block">
          {newArray.map((z: { id: number; icons: any }) => {
            return (
              <div
                className="cursor-pointer dark:bg-zinc-700 bg-gray-100 lg:w-auto hover:shadow-lg border p-3 border-yellow-600 mb-4"
                key={z.id}
              >
                <h1 className="flex justify-center">
                  <ReactIcon icon={z.icons} />
                </h1>
              </div>
            );
          })}
        </div>

        <div className="lg:w-2/3 relative overflow-hidden my-10 dark:bg-zinc-700 bg-gray-100">
          <div className="bg-red-300">
            <img src={blogs?.imageUrl.src} alt="" />
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1 className="mt-5 text-2xl md:text-4xl font-bold leading-8">
                {blogs?.title}
              </h1>
              <p className="mt-8 text-md md:text-xl leading-8 border-l-4 border-yellow-600 pl-2">
                {blogs?.subtitle}
              </p>
            </div>
            <div className="prose prose-lg mt-6 pb-5 prose-indigo text-[15px] md:text-lg mx-auto dark:text-gray-100 text-gray-700">
              <p className="text-md">{blogs.description}</p>
              {/* <div className="my-6"> */}
              <div className="dark:bg-black bg-gray-200 p-3 my-3">
                <Prism
                  withLineNumbers
                  colorScheme={theme === "light" ? "light" : "dark"}
                  language="tsx"
                >
                  {CodeLogs}
                </Prism>
              </div>
              <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Quis semper vulputate aliquam venenatis egestas sagittis quisque
                orci. Donec commodo sit viverra aliquam.
              </p>
              <br />
              <h2>From beginner to expert in 30 days</h2>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
              <figure className="py-5">
                <img
                  className="w-full rounded-lg"
                  src={blogs?.imageUrl.src}
                  alt=""
                  width={1310}
                  height={873}
                />
                <figcaption className="font-bold text-sm mt-1">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                </figcaption>
              </figure>
              <h2>Everything you need to get up and running</h2>
              <p>
                Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
                . Amet, massa quam varius orci dapibus volutpat cras. In amet eu
                ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
                viverra ridiculus non molestie. Gravida quis fringilla amet eget
                dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                congue erat ac. Cras fermentum convallis quam.
              </p>
              {blogs?.code && (
                <div className="dark:bg-black bg-gray-200 p-3 my-3">
                  <Prism
                    withLineNumbers
                    colorScheme={theme === "light" ? "light" : "dark"}
                    language="tsx"
                  >
                    {blogs?.code}
                  </Prism>
                </div>
              )}

              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
              <div className="my-7 border-l-2 border-yellow-500 pl-3">
                <h1 className="font-medium text-xl font-bold">GitHub</h1>
                <hr className="border border-zinc-600 my-2" />
                <a href="" className="text-sm text-blue-400">
                  https://google.com.pk
                </a>
                <h1 className="font-medium text-xl font-bold mt-4">
                  Live Preview
                </h1>
                <hr className="border border-zinc-600 my-2" />
                <a href="" className="text-sm text-blue-400">
                  https://google.com.pk
                </a>
                <h1 className="font-medium text-xl font-bold mt-4">
                  CodeSandbox
                </h1>
                <hr className="border border-zinc-600 my-2" />
                <a href="" className="text-sm text-blue-400 flex items-center">
                  Edit on CodeSandbox
                </a>
              </div>
              <div className="mt-5">
                <h1 className="mb-2 font-medium text-2xl">
                  Some Common Questions
                </h1>
                <Accordions items={accordionItems} />
              </div>
              <div className="mt-9 mb-4">
                <div className="grid grid-cols-2 gap-4 w-full h-20">
                  <div className="w-full h-full flex items-center justify-between dark:bg-zinc-800 bg-gray-200 rounded-lg px-4 border dark:border-zinc-800 border-gray-200 dark:hover:border-yellow-600 hover:border-yellow-600 cursor-pointer">
                    <ReactIcon icon="RiArrowLeftSFill" className="w-9 h-9" />
                    <div className="text-right">
                      <h1 className="font-bold">Next</h1>
                      <p className="text-sm">What is Presm</p>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-between dark:bg-zinc-800 bg-gray-200 rounded-lg px-4 border dark:border-zinc-800 border-gray-200 dark:hover:border-yellow-600 hover:border-yellow-600 cursor-pointer">
                    <div className="text-left">
                      <h1 className="font-bold">Prev</h1>
                      <p className="text-sm">What is Presm</p>
                    </div>
                    <ReactIcon icon="RiArrowRightSFill" className="w-9 h-9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 hidden lg:block ml-2">
          <div className="dark:bg-zinc-700 bg-gray-100 lg:w-[300px] h-screen shadow-xl border p-3 border-yellow-600">
            <h1 className="flex justify-center pt-10">Ads & feature Cards</h1>
          </div>
        </div>
      </div>
      <CourseCard />
    </div>
  );
};

export default blogsView;
