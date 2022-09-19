import { useEffect, useRef, useState } from "react";
import { ReactIcon } from "../index";
import { getRefValue } from "../../hooks/hooks";
import { AccordionData } from "./types";

function AccordionItem({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionData;
  isOpen: boolean;
  btnOnClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li className={`${isOpen ? "active" : ""}`}>
      <h2 className="m-1">
        <div
          onClick={btnOnClick}
          className="flex justify-between items-center user-none py-4 px-8 dark:bg-zinc-700 bg-gray-100 cursor-pointer select-none"
        >
          <h1 className={"font-bold text-md dark:text-white text-black"}>
            {data.title}
          </h1>
          <ReactIcon icon="FaPlus" />
        </div>
      </h2>

      <div className="accordion-item-container" style={{ height }}>
        <div
          ref={contentRef}
          className="mx-1 py-4 px-8 bg-zinc-700 border-l-2 border-yellow-500"
        >
          {data.content}
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;
