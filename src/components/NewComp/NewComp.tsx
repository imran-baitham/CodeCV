import React from "react";
import { Button } from "../Button/Button";
import teacher from "../../public/constor.png";

function NewComp() {
  return (
    <div className="container_main py-10">
      <div className="flex w-full p-4">
        <div className="w-full h-[400px] w-[700px] bgcover">
          <img src={teacher.src} alt="" className="h-[400px] w-[700px]" />
        </div>
        <div className="px-9 flex items-center w-full">
          <div>
            <h1 className="text-4xl font-medium py-2">Become an instructor</h1>
            <p className="font-medium py-2 text-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              magni eos, mollitia quisquam dolore totam omnis accusamus dolores
              molestiae impe
            </p>
            <Button className="mt-3">Start teaching today</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewComp;
