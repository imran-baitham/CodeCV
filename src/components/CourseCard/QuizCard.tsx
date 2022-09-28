import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CardData } from "../../mocks/mocks";
import { ReactIcon } from "../index";

export function QuizCard() {
  const [QuizData] = useState(CardData);

  return (
    <div className="container_main">
      <div className="pb-14 grid grid-cols-2 lg:grid-cols-3 gap-5">
        {QuizData?.slice(0, 6).map((data) => {
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
                <div className="group p-3 cursor-pointer h-[50px] flex items-center justify-between dark:bg-zinc-600 bg-gray-200 border-l-4 border-yellow-500">
                  <h1 className="font-bold text-xl">{data.title}</h1>
                  <ReactIcon
                    icon="FaArrowLeft"
                    className="rotate-[180deg] group-hover:animate-pulse"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
