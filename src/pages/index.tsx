import type { NextPage } from "next";
import Head from "next/head";
import Pipeline from "../components/Pipeline/Pipeline";
import { CourseCard, Docs } from "../components";
import { Article } from "../components/Article/Article";
import Slider from "../components/Slider/Slider";
import DivCourse from "../components/CourseCard/DivCourse";
import Subscribe from "../components/Subscribe/Subscribe";
import Accordion from "../components/Questions/Accordion";
import AccordionTest from "../components/Accordion/Accordion";

const Home: NextPage = () => {
  const accordionItems = [
    {
      title: "Accordion Item #1",
      content: (
        <div>
          <strong>This is the first item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{" "}
        </div>
      ),
    },
    {
      title: "Accordion Item #2",
      content: (
        <div>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, but shown when title is clicked. It will also be
          hidden if the title is clicked again or when another item is clicked.
          You can pass HTML tags in the content such as <u>underline tag</u>,{" "}
        </div>
      ),
    },
    {
      title: "Accordion Item #3",
      content: (
        <div>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{" "}
        </div>
      ),
    },
  ];

  return (
    <div className="dark:bg-zinc-800 bg-white">
      <Head>
        <title>CodeAcademy | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full dark:bg-zinc-800 bg-white">
        <div className="pt-10 md:pt-24">
          <AccordionTest items={accordionItems} />
          <Docs />
          <Accordion />
          <Article />
          <Pipeline />
          <Slider />
          <CourseCard />
          <DivCourse />
          <Subscribe />
        </div>
      </main>
    </div>
  );
};

export default Home;
