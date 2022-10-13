import type { NextPage } from "next";
import Head from "next/head";
import { QuizCard, Tailwint, Subscribe, Article } from "../components";
import Academy from "../components/Academy/Academy";
import Slider from "../components/Slider/Slider";
import SmallTags from "../components/SmallTag/SmallTags";

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
          <div className="py-20">
            <h1 className="container_main text-yellow-400 font-bold text-4xl pb-7">
              Start Quiz
            </h1>
            <QuizCard />
          </div>
          <Slider />
          <Article />
          <Subscribe />
        </div>
      </main>
    </div>
  );
};

export default Home;
