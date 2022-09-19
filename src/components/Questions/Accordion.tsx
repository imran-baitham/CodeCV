/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import MyAccod from "./MyAccod";
import { Questions } from "./Question";

function Accordion() {
  const [value] = useState(Questions);

  return (
    <div className="container_main">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {value?.map((curElem) => {
          const { id } = curElem;
          return <MyAccod key={id} {...curElem} />;
        })}
      </div>
    </div>
  );
}

export default Accordion;
