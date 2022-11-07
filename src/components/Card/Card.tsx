import { useState, useEffect } from "react";
import { ReactIcon } from "../ReactIcon/ReactIcon";

/* eslint-disable-next-line */
export interface CardProps {}

const btn = [
  { id: 1, name: "All Article or Blogs", catagory: "all" },
  { id: 2, name: "Next Js", catagory: "next" },
  { id: 3, name: "React Js", catagory: "react" },
  { id: 4, name: "Html5", catagory: "html" },
  { id: 4, name: "Css3", catagory: "css" },
  { id: 5, name: "Vue Js", catagory: "vue" },
];

export function Card(props: CardProps) {
  const [welcome, setWelcome] = useState<string>("Welcome Guest 🥳");

  useEffect(() => {
    setTimeout(() => {
      setWelcome("Contact List 😍");
    }, 12000);
  }, []);

  return (
    <>
      <div className="bg-yellow-50 dark:bg-zinc-800 shadow py-3 text-center w-full">
        <h1 className="text-xl font-medium">{welcome}</h1>
      </div>
      <div className="flex-1 bg-red-0 py-4">
        {btn.map((x: any) => {
          return (
            <div
              key={x.id}
              className="cursor-pointer flex items-center justify-between text-left w-full border-2 border-yellow-900 py-3 px-4 my-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500"
            >
              <div>
                <h1 className="text-xl font-medium">{x.name}</h1>
                <p className="text-sm">Welcome to card!</p>
              </div>
              <ReactIcon
                icon="BsCheckCircle"
                className="w-9 h-9 bg-green-100 p-[5px] rounded-full text-black"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
