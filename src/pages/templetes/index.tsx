/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { ReactIcon } from "../../components";
import { BlogsDataProps } from "../../Utils/blogsTypes";
import Link from "next/link";
import { tempDataProps } from "../../Utils/templeteProps";
import { tasks } from "../../mocks/mocks";
import TestImage from "../../public/templetesscreenshort/templetetwo.jpg";
import { Loader, Pagination } from "@mantine/core";

function index() {
  const [data, setData] = useState<tempDataProps | any>(null);
  const getData = () => fetch("/api/templetes").then((res) => res.json());
  const [activePage, setPage] = useState(1);
  const [SortedData, setSortedData] = useState<any>(data?.slice(0, 3));

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

  const handleChange = (activePage: number) => {
    const init = activePage * 3 - 3;
    const end = activePage * 3 + 0;
    setSortedData(data.slice(init, end));
    setPage(activePage);
  };

  return (
    <div>
      <div className="py-10 dark:bg-zinc-800">
        <div className="container_main">
          <div className="py-10">
            {/* <div className=" bg-gradient-to-r from-purple-500 to-pink-500"> */}
            <h1 className="text-4xl font-bold py-5 my-5 text-center">
              Awesome{" "}
              <span className="text-yellow-600 underline">Websites</span>
            </h1>
            {/* </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {data?.map((temp: tempDataProps) => {
                return (
                  <div key={temp.id} className={"border border-yellow-600"}>
                    <div
                      className={"boxtwo h-[400px]"}
                      style={{
                        backgroundImage: `url(${TestImage.src})`,
                      }}
                    ></div>
                    <div className="flex justify-between items-center dark:bg-zinc-700 bg-gray-200 w-full py-4 px-2">
                      <h1 className="font-medium text-md">{temp.title}</h1>
                      <Link href={`/templetes/${[temp.slug]}`} passHref>
                        <div className="flex items-center cursor-pointer dark:hover:text-yellow-400 hover:text-yellow-700 group">
                          <span>View Datails</span>
                          <ReactIcon
                            icon="CgArrowsExpandUpRight"
                            className="ml-1 group-hover:animate-pulse"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end py-12">
              <Pagination
                page={activePage}
                onChange={handleChange}
                total={Math.ceil(data.length / 3)}
                size="lg"
                color={"gray"}
              />
            </div>
          </div>
          <h1 className="font-bold text-4xl py-6">Animation Tasks</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3 pb-20">
            {tasks.map((cards: BlogsDataProps) => {
              return (
                <div
                  className="group md:h-[250px] cursor-pointer"
                  key={cards.id}
                >
                  <div
                    className={
                      "dark:group-hover:bg-yellow-600 group-hover:bg-yellow-400 dark:bg-zinc-700 bg-gray-100 py-5 shadow-sm flex items-center justify-center rounded-xl"
                    }
                  >
                    <div className="grid grid-cols-1">
                      <div className="m-auto text-[45px] w-[100px] h-[100px] dark:bg-zinc-600 bg-gray-200 rounded-full flex justify-center items-center">
                        <ReactIcon
                          icon={cards.icon}
                          className="dark:text-gray-300 text-gray-500"
                        />
                      </div>
                      <h1 className="block md:pt-4 pt-6 md:pb-6 text-lg md:text-2xl font-bold dark:text-gray-200">
                        {cards.title}
                      </h1>
                    </div>
                  </div>
                  <div className="hidden md:flex dark:group-hover:text-yellow-500 group-hover:text-yellow-600 relative bottom-[30px] sm:left-[96px] rounded-full w-14 h-14 dark:border-zinc-600 border dark:bg-zinc-700 bg-gray-100 items-center justify-center">
                    <ReactIcon icon="FiArrowRight" className="w-4 h-5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
