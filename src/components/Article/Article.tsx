/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components'
import { DemoData } from '../../mocks/articles/articles'
// import { ViewProjectPreloader } from "../../pages/blogs/blogsSkeleton/BlogsSkeleton";
// import { BlogsDataProps } from "../../Utils/blogsTypes";

export interface DataProps {
  id?: number
  title?: string
  subtitle?: string
  image?: any
}
export function Article() {
  const [data, setData] = useState(DemoData)
  // const [data, setData] = useState<BlogsDataProps | any>(null);
  const [visible, setVisible] = useState(6)

  // const getData = () => fetch("/api/articles").then((res) => res.json());

  // useEffect(() => {
  //   setTimeout(() => {
  //     getData().then((product) => setData(product));
  //   }, 0);
  // }, []);

  // if (!data)
  //   return (
  //     <div className="w-full py-20">
  //       <div className="container_main">
  //         <ul
  //           role="list"
  //           className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
  //         >
  //           <ViewProjectPreloader />
  //         </ul>
  //       </div>
  //     </div>
  //   );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let router = useRouter()

  let ConvertData = data?.slice(0, 9)

  ConvertData.length >= visible ? '' : router.push('/blogs')

  const handleload = () => {
    setVisible((prev) => prev + 3)
  }

  return (
    <div className="dark:bg-zinc-800 bg-white">
      <div className="container_main">
        <h1 className="text-yellow-400 font-bold text-4xl">Letest Article</h1>
        <div className="py-8 px-1">
          <div className="grid gap-3 lg:m-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {ConvertData?.slice(0, visible).map((post: any) => {
              return (
                <div
                  className="shadow rounded cursor-pointer hover:shadow-xl dark:bg-zinc-700"
                  key={post.id}
                >
                  <div className="bg-gray-800 rounded">
                    <img
                      src={post.imageUrl.src}
                      alt=""
                      className="lg:h-[200px] m-auto"
                    />
                  </div>
                  <div className="p-3 h-[150px]">
                    <h2 className="font-bold text-xl">
                      {post.title.length > 46
                        ? post.title.slice(0, 50) + ' ...'
                        : post.title}
                    </h2>
                    <p className="text-sm pt-2 dark:text-gray-200 text-gray-600">
                      {post.subtitle.length > 130
                        ? post.subtitle.slice(0, 130) + ' ...'
                        : post.subtitle}
                    </p>
                  </div>
                  <div className="p-3 dark:text-yellow-300 text-yellow-600 justify-between items-center flex">
                    <Link href={`/blogs/${[post.slug]}`} passHref>
                      <a href="">???? Read article</a>
                    </Link>
                    <a
                      href="#"
                      className="dark:text-white text-black text-[12px] "
                    >
                      {post.date}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="w-full my-10 flex justify-center">
            <Button xl onClick={handleload}>
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
