import Link from "next/link";
import React from "react";
import { Button } from "../components";

function index() {
  return (
    <div className="dark:bg-zinc-800 overflow-hidden">
      <div className="container_main md:h-[810px] h-[780px] dark:bg-zinc-800 flex items-center justify-center">
        <div className="w-full flex justify-center">
          <h1 className="font-bold text-[240px] md:text-[500px] dark:text-zinc-700 text-gray-100">
            404
          </h1>
          <div className="absolute px-[2rem] md:px-0 top-[400px] md:top-[370px] md:w-[500px] text-center">
            <div>
              <h1 className="font-bold text-4xl my-2">Nothing to see here</h1>
              <p className="text-md leading mb-2">
                Page you are trying to open does not exist. You may have
                mistyped the address, or the page has been moved to another URL.
                If you think this is an error contact support.
              </p>
              <Link href={"/"}>
                <Button className="m-auto">Get Back to Home Page</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
