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
      <div className="container_main pb-10">
        <div className="shadow-xl dark:bg-zinc-700">
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
        </div>
      </div>
      <CourseCard />
    </div>
  );
}

export default blogsView;
