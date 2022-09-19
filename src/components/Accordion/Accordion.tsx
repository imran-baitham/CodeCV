import { useState } from "react";
import { AccordionData } from "./types";
import AccordionItem from "./AccordionItem";

function AccordionTest({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <div className="container_main">
      <ul className="w-5/6 m-auto">
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            data={item}
            isOpen={idx === currentIdx}
            btnOnClick={() => btnOnClick(idx)}
          />
        ))}
      </ul>
    </div>
  );
}

export default AccordionTest;
