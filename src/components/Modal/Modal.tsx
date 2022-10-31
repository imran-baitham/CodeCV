import React from "react";
import { ReactIcon } from "../ReactIcon/ReactIcon";

function Modal() {
  return (
    <div className="w-full h-screen fixed bg-[rgba(0,0,0,0.8)] top-0 left-0 z-50 flex items-center justify-center">
      <div className="w-[900px] h-[500px] rounded bg-white">
        <div className="flex w-full h-full text-black">
          <div className="w-full">
            <h1>hello</h1>
          </div>
          <div className="w-[500px] bg-yellow-200">
            <div className="flex justify-end py-2 px-2">
              <ReactIcon
                icon="VscClose"
                className="cursor-pointer p-1 bg-black w-8 h-8 text-white rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
