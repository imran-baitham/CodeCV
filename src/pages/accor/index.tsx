import React, { useEffect, useState } from "react";
import Accordions from "../../components/Accordion/Accordion";

import { ReactNode } from "react";

type AccordionData = {
  title: string;
  content: ReactNode;
};

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<any>(null);
  const getData = () => fetch("/api/accordin").then((res) => res.json());
  //   console.log(data, "data accordians");

  //   let DemoView = data?.map((x: AccordionData) => x);
  //   let Demo =  data?.map((x: any) => x.title),

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      getData().then((product) => setData(product));
    }, 0);
  }, []);

  return <Accordions items={[]} />;
}

export default index;

const DemoDataAccordint = [
  {
    title: "What is WebThone",
    content: (
      <div>
        <h1>
          <b>1. This is title one</b>
        </h1>
        <p className="bg-red-00 underline uppercase text-green-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, illo!
        </p>
      </div>
    ),
  },
];
