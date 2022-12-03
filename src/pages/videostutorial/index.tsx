/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ReactIcon } from '../../components'
import { GenericLoader } from '../../components/GenericLoader/GenericLoader'
import { tutorialProps } from '../../Utils/tutorials'
import { ViewProjectPreloader } from '../blogs/blogsSkeleton/BlogsSkeleton'

function index() {
  const [tutorial, setTutorial] = useState<any | null>(null)
  const getData = () => fetch('/api/tutorials').then((res) => res.json())

  useEffect(() => {
    setTimeout(() => {
      getData().then((data) => setTutorial(data))
    }, 0)
  }, [])

  if (!tutorial)
    return (
      <div className="w-full py-20 dark:bg-zinc-800">
        <div className="container_main">
          <GenericLoader shapes={[['line'], ['line'], ['line']]} />
          <ul
            role="list"
            className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
          >
            {/* <ViewProjectPreloader /> */}
          </ul>
        </div>
      </div>
    )

  return (
    <div className="w-full dark:bg-zinc-800 bg-white">
      <div className="container_main">
        <h1 className="text-4xl font-bold pt-32 text-center">
          <span className="text-yellow-600 underline">Video Tutorials</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-5">
          {tutorial?.map((video: tutorialProps) => {
            return (
              <div key={''} className="flex justify-center">
                <div>
                  <Image
                    width={400}
                    height={230}
                    src={video.Mentor}
                    alt={'Video image'}
                    className={'bg-gray-200 rounded-md'}
                  />
                  <div className="border-2 dark:border-zinc-800 border-white">
                    <h1 className="text-[30px] font-bold mt-1 leading-[34px]">
                      {video.title}
                    </h1>
                    <div className="flex items-center pt-2">
                      {video.rating.map((x: any, index: any) => {
                        return (
                          <div key={index}>
                            <ReactIcon
                              icon="GiNorthStarShuriken"
                              className="w-5 h-5"
                            />
                          </div>
                        )
                      })}

                      <span className="pl-2 text-lg">{video.reviews}</span>
                    </div>
                    <h2 className="text-bold text-2xl pb-4 pt-2">
                      {video.pricing}
                    </h2>
                    <Link href={`/videostutorial/${[video.slug]}`} passHref>
                      <button
                        className={
                          'dark:bg-zinc-700 bg-gray-100 flex items-center cursor-pointer border border-zinc-700 hover:border-yellow-500 py-3 px-7 rounded'
                        }
                      >
                        <span>{video.start}</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default index
