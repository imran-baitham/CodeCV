import { useEffect, useRef, useState } from "react";
import { ReactIcon } from "../index";
import { getRefValue } from "../../hooks/hooks";
import { AccordionData } from "../../Utils/accordionTypes";

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
      <div
        onClick={btnOnClick}
        className="mb-2 flex justify-between items-center user-none py-4 px-8 dark:bg-zinc-600 bg-gray-200 cursor-pointer select-none"
      >
        <h1 className={"font-bold text-md dark:text-white text-black"}>
          {data.title}
        </h1>
        <ReactIcon icon="FaPlus" />
      </div>

      <div className="accordion-item-container mb-2" style={{ height }}>
        <div
          ref={contentRef}
          className="text-md mx-1 py-4 px-8 border-l-2 border-yellow-500 dark:bg-zinc-600 bg-gray-200 dark:text-gray-200 text-gray-600"
        >
          {data.content}
        </div>
      </div>
    </li>
  );
}

export default AccordionItem;
