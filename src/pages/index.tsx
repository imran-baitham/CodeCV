import type { NextPage } from "next";
import Head from "next/head";
import { Article } from "../components/Article/Article";
import Subscribe from "../components/Subscribe/Subscribe";
import Tailwint from "../components/Docs/Tailwint/Tailwint";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-zinc-800 bg-white">
      <Head>
        <title>Home | Coder</title>
        <meta name="description" content="read article and blogs" />
        <meta property="og:title" content="my blog website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full dark:bg-zinc-800 bg-white">
        <div className="">
          <Tailwint />
          <Article />
          <Subscribe />
        </div>
      </main>
    </div>
  );
};

export default Home;
