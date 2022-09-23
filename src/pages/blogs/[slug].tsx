/* eslint-disable react-hooks/rules-of-hooks */
import { useTheme } from "next-themes";
import { Prism } from "@mantine/prism";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { CourseCard } from "../../components";
import AccordionTest from "../../components/Accordion/Accordion";
import { accordionItems } from "../../mocks/more";
import { Loader } from "@mantine/core";
import Head from "next/head";

type slugProps = {
  slug: string | string | number | any | JSX.Element | ReactNode;
};

function blogsView() {
  const [data, setData] = useState(null);
  const getData = () => fetch("/api/articles").then((res) => res.json());

  useEffect(() => {
    setTimeout(() => {
      getData().then((product) => setData(product));
    }, 0);
  }, []);

  if (!data)
    return (
      <div className="w-full py-20 dark:bg-zinc-800">
        <div className="container_main h-screen ">
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        </div>
      </div>
    );

  const { theme } = useTheme();

  const router = useRouter();
  const { slug } = router.query;
  const blogs = data?.find((article: slugProps) => article.slug === slug);

  console.log(blogs?.content, "blogs?.Contant");
  let contactData = JSON.stringify(blogs?.content.props.children);
  const Contant = contactData.slice(1, -1);

  let CodeLogs = `
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(DemoData);
  console.warn(data, "data api");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug, "slug test");
  const blogs = data.find(
    (article: { slug: string | string | number | any }) => article.slug === slug
  );
  const code = "Initializing Logs.";
  `;

  return (
    <div className="dark:bg-zinc-800 bg-white">
      <Head>
        <title>Coder | {blogs?.title}</title>
        <meta name="description" content={`Learn more about ${blogs?.title}`} />
        <meta
          property="og:title"
          content={`${blogs?.title} blog page website`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {blogs?.bgImageUrl && (
        <div className="bg-red-500 h-[500px]">
          <img
            src={blogs?.bgImageUrl.src}
            className={"h-[500px] w-full"}
            alt=""
          />
        </div>
      )}

      {blogs?.NetlifyBlog && (
        <div className="bg-zinc-900 h-48 flex items-center justify-center">
          <h1 className="font-bold text-4xl">{blogs?.NetlifyBlog}</h1>
        </div>
      )}
      <div className="container_main pb-10 md:flex justify-between">
        <div className="lg:w-2/3 relative overflow-hidden my-10 dark:bg-zinc-700 bg-gray-100">
          <div className="bg-red-300">
            <img src={blogs?.imageUrl.src} alt="" />
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1 className="mt-5 text-2xl md:text-4xl font-bold leading-8">
                {blogs?.title}
              </h1>
              <p className="mt-8 text-md md:text-xl leading-8 border-l-4 border-yellow-600 pl-2">
                {blogs?.description}
              </p>
            </div>
            <div className="prose prose-lg mt-6 pb-9 prose-indigo text-[15px] md:text-lg mx-auto dark:text-gray-100 text-gray-700">
              <p className="py-10">{Contant}</p>
              <p>
                Faucibus commodo massa rhoncus, volutpat.{" "}
                <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                praesent donec est. Odio penatibus risus viverra tellus varius
                sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                Dignissim sed eget risus enim.{" "}
                <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis
              </p>
              <div className="my-6">
                <Prism
                  withLineNumbers
                  colorScheme={theme === "light" ? "light" : "dark"}
                  language="tsx"
                >
                  {CodeLogs}
                </Prism>
              </div>
              <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Quis semper vulputate aliquam venenatis egestas sagittis quisque
                orci. Donec commodo sit viverra aliquam porttitor ultrices
                gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
                justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
                Amet, duis sed elit interdum dignissim.
              </p>
              <h2>From beginner to expert in 30 days</h2>
              <p>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
              <blockquote>
                <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </blockquote>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
              <figure className="py-5">
                <img
                  className="w-full rounded-lg"
                  src={blogs?.imageUrl.src}
                  alt=""
                  width={1310}
                  height={873}
                />
                <figcaption className="font-bold text-lg mt-1">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                </figcaption>
              </figure>
              <h2>Everything you need to get up and running</h2>
              <p>
                Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>
                . Amet, massa quam varius orci dapibus volutpat cras. In amet eu
                ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
                viverra ridiculus non molestie. Gravida quis fringilla amet eget
                dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                congue erat ac. Cras fermentum convallis quam.
              </p>
              {blogs?.code && (
                <div className="dark:bg-black bg-gray-200 p-3 my-3">
                  <Prism
                    withLineNumbers
                    colorScheme={theme === "light" ? "light" : "dark"}
                    language="tsx"
                  >
                    {blogs?.code}
                  </Prism>
                </div>
              )}

              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
              <div className="my-5">
                <h1 className="mb-2 font-medium text-2xl">
                  Some Common Questions
                </h1>
                <AccordionTest items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 hidden lg:block">
          <div className="dark:bg-zinc-700 bg-gray-100 lg:w-[330px] h-screen shadow-xl border-2 p-3 border-red-600">
            cards
          </div>
        </div>
      </div>
      <CourseCard />
    </div>
  );
}

export default blogsView;
