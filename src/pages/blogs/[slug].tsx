import { useTheme } from "next-themes";
import { Prism } from "@mantine/prism";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { DemoData } from "./../../mocks/mocks";
import { CourseCard } from "../../components";

function blogsView() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme, setTheme } = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(DemoData);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug, "slug test");
  const blogs = data.find(
    (article: { slug: string | string | number | any }) => article.slug === slug
  );

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
      <div className="container_main pb-10 md:flex justify-between">
        {/* <div className="shadow-xl dark:bg-zinc-700">
          <img src={blogs?.imageUrl.src} alt="" />
          <div className="py-7 px-5 bg-gradient-to-r from-purple-500 to-pink-500">
            <h2 className="font-bold text-4xl">{blogs?.title}</h2>
          </div>
          <div className="p-5">
            <div className="p-1">
              <h1>{`${
                blogs?.date.length >= 14
                  ? blogs?.date.substring(0, 14) + "..."
                  : "...."
              } ${blogs?.view} views ${blogs?.likes} likes`}</h1>
            </div>
            <div className="py-7">
              <h2 className="font-medium text-md">
                {`${blogs?.subtitle} ${blogs?.subtitle} ${blogs?.subtitle} ${blogs?.subtitle} ${blogs?.subtitle} ${blogs?.subtitle} `}
              </h2>
            </div>
            <Prism
              withLineNumbers
              colorScheme={theme === "light" ? "light" : "dark"}
              language="tsx"
            >
              {CodeLogs}
            </Prism>
            <br />
          </div>
        </div> */}
        {/* <div> */}
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
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
            </div>
            <div className="prose prose-lg mt-6 prose-indigo text-[15px] md:text-lg mx-auto dark:text-gray-100 text-gray-700">
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
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
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
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 hidden lg:block">
          <div className="dark:bg-zinc-700 bg-gray-100 lg:w-[330px] h-screen shadow-xl border-2 p-3 border-red-600">
            cards
          </div>
        </div>
        {/* </div> */}
      </div>
      <CourseCard />
    </div>
  );
}

export default blogsView;
