import Link from "next/link";
import React from "react";
import { Button } from "../../components";

function index() {
  return (
    <div className="dark:bg-zinc-800 bg-white">
      <div className="container_main h-screen py-32">
        <h1>Quiz comming Soon</h1>
        <Link href={"/quiz/startquiz"}>
          <Button>go to start any framework quiz and select there</Button>
        </Link>
      </div>
    </div>
  );
}

export default index;
