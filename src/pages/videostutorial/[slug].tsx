/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { classNames, ReactIcon } from "../../components";
import Link from "next/link";
import { tutorialProps } from "../../Utils/tutorials";
import { useRouter } from "next/router";

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let LinkMedia = [
  { name: "RiFacebookBoxFill", href: "#" },
  { name: "RiTwitterFill", href: "#" },
  { name: "RiInstagramFill", href: "#" },
  { name: "RiLinkedinBoxFill", href: "#" },
];

function video() {
  const [likes, setLikes] = useState<tutorialProps | any>(false);
  const [dislike, setDislike] = useState<boolean | any>(false);
  const [watch, setWatch] = useState<boolean | any>(false);

  const [tutorial, setTutorial] = useState<any | null>(null);
  const getData = () => fetch("/api/tutorials").then((res) => res.json());

  useEffect(() => {
    setTimeout(() => {
      getData().then((data) => setTutorial(data));
    }, 0);
  }, []);

  const router = useRouter();
  const { slug } = router.query;

  console.log(slug, "slug");
  const videoTutorial = tutorial?.find(
    (video: tutorialProps) => video.slug === slug
  );

  return (
    <div className="w-full dark:bg-zinc-800 bg-white">
      <div className="container_div pt-20 pb-20">
        <div className="flex justify-between py-10">
          <Link href={"/videostutorial"}>
            <div className="flex items-center cursor-pointer">
              <ReactIcon icon="ImArrowLeft2" />
              <span className="pl-3"> back to course</span>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex items-center cursor-pointer">
              <span className="p-2">Back to Home</span>
              <ReactIcon icon="ImHome" className="w-4 h-4" />
            </div>
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <div className="h-auto md:h-[605px] dark:bg-zinc-700 shadow-xl p-2 rounded-md">
              <div className="rounded md:h-full bg-zinc-900 flex items-center justify-center">
                <iframe
                  width="100%"
                  height="470"
                  src={videoTutorial?.video}
                  title="Youtube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="">
              <div className="py-7 md:grid grid-cols-2 justify-between items-center">
                <div>
                  <button
                    onClick={() => setWatch((prev: any) => !prev)}
                    className={classNames(
                      watch
                        ? "border-green-400 dark:bg-green-400 bg-green-400 text-black"
                        : "",
                      "ml-3 dark:bg-zinc-700 bg-gray-100 flex items-center cursor-pointer border border-yellow-500 py-2 px-5 rounded"
                    )}
                  >
                    <ReactIcon icon="BsCheckCircle" className="mr-2 w-5 h-5" />
                    <span>{watch ? " Completed" : "Mark as Completed"}</span>
                  </button>
                </div>
                <div className="mt-4 md:mt-0 flex justify-end">
                  <button
                    onClick={() => setLikes((prev: any) => !prev)}
                    className={classNames(
                      likes ? "border border-green-400" : "",
                      "ml-3 dark:bg-zinc-700 bg-gray-100 flex items-center cursor-pointer dark:hover:text-yellow-400 hover:text-yellow-700 border border-yellow-500 py-2 px-5 rounded"
                    )}
                  >
                    <ReactIcon
                      icon={likes === true ? "AiFillLike" : "AiOutlineLike"}
                      className={classNames(
                        likes ? "text-green-400" : "",
                        "mr-2 w-5 h-5"
                      )}
                    />
                    <span className={classNames(likes ? "text-green-400" : "")}>
                      {likes ? " Like" : "Like"}
                    </span>
                  </button>
                  <button
                    onClick={() => setDislike((prev: any) => !prev)}
                    className={classNames(
                      dislike ? "border border-red-400" : "",
                      "mx-3 dark:bg-zinc-700 bg-gray-100 flex items-center cursor-pointer dark:hover:text-yellow-400 hover:text-yellow-700 border border-yellow-500 py-2 px-5 rounded"
                    )}
                  >
                    <ReactIcon
                      icon={
                        dislike === true
                          ? "RiShareForwardFill"
                          : "RiShareForwardLine"
                      }
                      className={classNames(
                        dislike ? "text-red-400" : "",
                        "mr-2 w-5 h-5"
                      )}
                    />
                    <span className={classNames(dislike ? "text-red-400" : "")}>
                      {dislike ? "Share" : "Share"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="py-5">
                <div className="flex items-center text-2xl">
                  <b className="text-yellow-500">Lesson 1.</b>
                  <h1 className="font-[500] pl-2">{videoTutorial?.title}</h1>
                </div>
                <p className="p-1 py-2 leading-[26px] dark:text-gray-300 text-gray-700">
                  {videoTutorial?.discription}
                </p>
              </div>
            </div>

            <div className="mt-9 mb-4">
              <div className="grid grid-cols-2 gap-4 w-full h-20">
                <div className="w-full h-full flex items-center justify-between dark:bg-zinc-700 bg-gray-200 rounded-lg px-4 border dark:border-zinc-800 border-gray-200 dark:hover:border-yellow-600 hover:border-yellow-600 cursor-pointer">
                  <ReactIcon icon="RiArrowLeftSFill" className="w-9 h-9" />
                  <div className="text-right">
                    <h1 className="font-bold">Next</h1>
                    <p className="text-sm">What is Presm</p>
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-between dark:bg-zinc-700 bg-gray-200 rounded-lg px-4 border dark:border-zinc-800 border-gray-200 dark:hover:border-yellow-600 hover:border-yellow-600 cursor-pointer">
                  <div className="text-left">
                    <h1 className="font-bold">Prev</h1>
                    <p className="text-sm">What is Presm</p>
                  </div>
                  <ReactIcon icon="RiArrowRightSFill" className="w-9 h-9" />
                </div>
              </div>
            </div>

            <hr className="border dark:border-zinc-700 border-gray-200 mt-24" />
            <div className="py-10">
              <h1 className="text-2xl font-bold pb-4">Mentor</h1>
              <div className="flex items-center py-4">
                <div className="border-2 border-yellow-600 p-1 rounded-full flex items-center">
                  <Image
                    width={70}
                    height={70}
                    src={videoTutorial?.MentorImage}
                    alt=""
                    className={"rounded-full"}
                  />
                </div>
                <div className="ml-3">
                  <h1 className="font-medium">{videoTutorial?.MentorName}</h1>
                  <span className="text-sm">{videoTutorial?.subtitle}</span>
                </div>
              </div>
              <p className="p-1 py-2 leading-[26px] dark:text-gray-300 text-gray-700">
                {videoTutorial?.discription}
              </p>

              <div className="py-5 flex lg:items-end justify-left">
                {LinkMedia.map((x: any) => {
                  return (
                    <a
                      key={x.name}
                      href=""
                      className="mr-2 border border-1 dark:border-white border-black p-[6px]"
                    >
                      <ReactIcon icon={x.name} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden md:block w-1/2 rounded-sm ml-0 h-auto">
            <div className="px-4">
              <div className="py-4 dark:bg-zinc-600 bg-gray-100 pl-4 rounded-md shadow-md">
                <h1 className="text-2xl font-bold">{videoTutorial?.title}</h1>
                <span className="text-sm">Video Tutorials</span>
              </div>
              <div className="my-3 py-1 dark:bg-zinc-700 bg-gray-100 rounded-sm h-[500px] overflow-y-auto overflow-x-hidden">
                {data.map((x) => {
                  return (
                    <h1
                      className="flex items-center dark:bg-zinc-800 bg-white border dark:border-zinc-800 border-gray-300 my-2 mx-3 rounded-md px-3 py-4 cursor-pointer"
                      key={""}
                    >
                      <ReactIcon icon="FiPlayCircle" className="w-5 h-5" />
                      <h1 className="pl-3">Building a web site</h1>
                    </h1>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default video;
// Related tutorials
// Did this answer your question?
// Was this helpful?

// =========== options ================
// useless
// no
// yes
// amazing
