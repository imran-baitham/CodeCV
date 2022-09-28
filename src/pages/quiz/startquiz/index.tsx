import Link from "next/link";
import React from "react";
import { Button } from "../../../components";

function index() {
  return (
    <div className="dark:bg-zinc-800 bg-white">
      <div className="container_main h-screen py-32">
        <h1>Quiz comming Soon start quiz</h1>
        <Link href={"/quiz/startquiz/framework"}>
          <Button>start js quiz and another quiz test for fun</Button>
        </Link>
      </div>
    </div>
  );
}

export default index;
