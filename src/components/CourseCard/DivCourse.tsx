import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CardData } from "../../mocks/mocks";
import ReactIcon from "../ReactIcon/ReactIcon";

function DivCourse() {
  const [Demo, setDemo] = useState(CardData);

  return (
    <div className="container_main">
      <div className="pb-14 grid grid-cols-2 lg:grid-cols-3 gap-5">
        {Demo?.slice(0, 6).map((data) => {
          return (
            <div className="rounded dark:bg-zinc-700" key={data.id}>
              <Image
                width={500}
                height={270}
                src={data.imageUrl}
                alt={"image"}
                className="m-auto"
              />
              <Link href={"/"}>
                <div className="p-3 cursor-pointer h-[50px] flex items-center justify-between dark:bg-zinc-600 bg-gray-200 border-l-4 dark:border-yellow-700 border-black">
                  <h1 className="font-bold text-xl">{data.title}</h1>
                  <ReactIcon icon="FaArrowLeft" className="rotate-[180deg]" />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DivCourse;
