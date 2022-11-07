import React from "react";
import { ReactIcon } from "../ReactIcon/ReactIcon";
import ImagePic from "../../public/call-center-support.svg";
import Image from "next/image";
import { Button } from "../Button/Button";
import Link from "next/link";

const ModelData = {
  titlecourse: "🔸Courses",
  titletemplete: "🔸Templetes & Componets",
  course: [
    { id: 1, name: "Html" },
    { id: 1, name: "Css" },
    { id: 1, name: "JavaScript" },
    { id: 1, name: "React Js" },
    { id: 1, name: "Next Js" },
    { id: 1, name: "Vue Js" },
    { id: 1, name: "Anglar Js" },
    { id: 1, name: "Node Js" },
    { id: 1, name: "Figma" },
    { id: 1, name: "Stack" },
    { id: 1, name: "PHP" },
  ],
  templete: [
    { id: 1, name: "portfolio website" },
    { id: 1, name: "Profile" },
    { id: 1, name: "blog website" },
    { id: 1, name: "chat app" },
    { id: 1, name: "Modals" },
    { id: 1, name: "Cards" },
  ],
};

interface modalProps {
  setShow: any;
}

function Modal(props: modalProps) {
  const { setShow } = props;
  
  return (
    <div
      className="w-full h-screen fixed bg-[rgba(0,0,0,0.8)] top-0 left-0 z-50 flex items-center justify-center"
      onClick={() => setShow(false)}
    >
      <div
        className="md:w-[900px] md:h-[500px] rounded bg-white mx-3 lg:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:flex w-full h-full">
          <div className="md:w-[500px] lg:w-[700px] bg-yellow-200 flex items-center justify-center">
            <div>
              <div className="w-48 h-48 lg:w-80 lg:h-80 relative">
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                  src={ImagePic.src}
                  alt=""
                />
              </div>
              <h1 className="font-bold text-lg md:text-2xl text-blue-800 underline mt-3 text-center font-['Nosifer']">
                <Link href={"/contact"}>Contact Us</Link>
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-[850px] dark:bg-zinc-600">
            <div
              className="flex justify-end py-2 px-2"
              onClick={() => setShow(false)}
            >
              <ReactIcon
                icon="VscClose"
                className="cursor-pointer p-1 shadow bg-yellow-900 hover:bg-black w-8 h-8 text-white rounded-full hover:rotate-180 ease-out duration-300"
              />
            </div>
            <div className="p-1 md:p-5">
              <h1 className="text-xl md:text-4xl font-['Nosifer']">
                Our features
              </h1>
              <div className="py-3">
                <div className="flex items-center pt-3 pb-2">
                  <h1 className="font-bold md:text-2xl text-md pr-2">
                    {ModelData.titlecourse}
                  </h1>
                </div>
                <div className="flex flex-wrap">
                  {ModelData.course.map((data) => {
                    return (
                      <div key={data.id} className="m-[2px] md:m-1">
                        <Button xs>{data.name}</Button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center pt-3 pb-2">
                  <h1 className="font-bold md:text-2xl text-md pr-2">
                    {ModelData.titletemplete}
                  </h1>
                </div>
                <div className="flex flex-wrap">
                  {ModelData.templete.map((data) => {
                    return (
                      <div key={data.id} className="m-[2px] md:m-1">
                        <Button xs>{data.name}</Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
