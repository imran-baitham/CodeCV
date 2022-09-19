import React, { useState } from "react";
import { ReactIcon } from "../index";
interface QuestionProps {
  id: number;
  title: string;
  subtitle: string;
}
const MyAccod: React.FC<QuestionProps> = ({ title, subtitle }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center user-none py-4 px-8 bg-yellow-800 cursor-pointer select-none"
      >
        <h1 className={"font-bold text-md"}>{title}</h1>
        <ReactIcon icon="FaPlus" />
      </div>
      <div className="bg-yellow-800">
        {show && <p className="h-20 py-4 px-8 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};

export default MyAccod;
