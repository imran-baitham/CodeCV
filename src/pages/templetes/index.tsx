/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useId, useState } from 'react'
import { Button, ReactIcon } from '../../components'
import { BlogsDataProps } from '../../Utils/blogsTypes'
import Link from 'next/link'
import { tempDataProps } from '../../Utils/templeteProps'
import { tasks } from '../../mocks/mocks'
import TestImage from '../../public/templetesscreenshort/templetetwo.jpg'
import bgTestImage from '../../public/js.png'
import bgTesttwoImage from '../../public/Demo.jpg'
import { Loader } from '@mantine/core'
import { GenericLoader } from '../../components/GenericLoader/GenericLoader'

function index() {
  const [data, setData] = useState<tempDataProps | any>(null)

  const getData = () => fetch('/api/templetes').then((res) => res.json())
  useEffect(() => {
    setTimeout(() => {
      getData().then((product) => setData(product))
    }, 0)
  }, [])

  if (!data)
    return (
      <div className="w-full py-20 dark:bg-zinc-800">
        <div className="container_main flex items-center justify-center">
          <Loader color="gray" size="xl" variant="dots" />
        </div>
        <div className="container_main flex items-center justify-center">
          <GenericLoader
            shapes={[
              ['line', 'line', 'line'],
              ['line', 'line', 'line'],
              ['line', 'line', 'line'],
              ['line', 'line', 'line'],
              ['line', 'line', 'line'],
              ['line', 'line', 'line'],
              ['line', 'line', 'line'],
            ]}
          />
        </div>
      </div>
    )

  return (
    <div>
      <div className="dark:bg-zinc-800 overflow-hidden">
        <div className="bg-gray-100 dark:bg-zinc-900 h-[500px] w-full overflow-hidden">
          <div className="container_main flex items-center h-full justify-center">
            <div>
              <h1 className="text-yellow-400 text-center font-bold text-4xl">
                Awesome websites, by awesome humans beings.
              </h1>
              <p className="text-center">
                Styled components is used by teams all around the world to
                <br /> create beautiful websites, like these ones
              </p>
            </div>
            <BackgroundIllustration className="overflow-hidden hidden lg:block absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
          </div>
        </div>
        <div className="w-full m-auto absolute bottom-[250px]">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-1 lg:items-center container_div">
            <div
              style={{
                backgroundImage: `url(${bgTestImage.src})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
              }}
              className="rounded lg:h-[130px] transition ease-in-out delay-196 lg:hover:scale-110"
            ></div>
            <div
              style={{
                backgroundImage: `url(${bgTesttwoImage.src})`,
                backgroundPosition: 'left',
                backgroundSize: 'cover',
              }}
              className="rounded h-[200px] transition ease-in-out delay-196 lg:hover:scale-110 z-[2]"
            ></div>
            <div
              style={{
                backgroundImage: `url(${bgTestImage.src})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
              }}
              className="group lg:w-[360px] lg:h-[250px] lg:relative right-[75px] rounded transition ease-in-out delay-196 lg:hover:scale-110 z-10 overflow-hidden"
            ></div>

            <div
              style={{
                backgroundImage: `url(${bgTesttwoImage.src})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
              }}
              className="rounded h-[200px] transition ease-in-out delay-196 lg:hover:scale-110 z-[2]"
            ></div>
            <div
              style={{
                backgroundImage: `url(${bgTestImage.src})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
              }}
              className="rounded lg:h-[130px] transition ease-in-out delay-196 lg:hover:scale-110"
            ></div>
          </div>
        </div>

        <div className="container_main">
          <div className="py-10 mt-52">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {data?.map((temp: tempDataProps | any) => {
                return (
                  <div key={temp.id} className={'border border-yellow-600'}>
                    <div
                      className={'boxtwo h-[400px]'}
                      style={{
                        backgroundImage: `url(${TestImage.src})`,
                      }}
                    ></div>
                    <div className="flex justify-between items-center dark:bg-zinc-700 bg-gray-200 w-full py-4 px-2">
                      <h1 className="font-medium text-md">{temp.title}</h1>
                      <Link href={`/templetes/${[temp.slug]}`} passHref>
                        <div className="flex items-center cursor-pointer dark:hover:text-yellow-400 hover:text-yellow-700 group">
                          <span>View Datails</span>
                          <ReactIcon
                            icon="CgArrowsExpandUpRight"
                            className="ml-1 group-hover:animate-pulse"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <h1 className="font-bold text-4xl py-6">Animation Tasks</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3 pb-20">
            {tasks.map((cards: any) => {
              return (
                <div
                  className="group md:h-[250px] cursor-pointer"
                  key={cards.id}
                >
                  <div
                    className={
                      'dark:group-hover:bg-yellow-600 group-hover:bg-yellow-400 dark:bg-zinc-700 bg-gray-100 py-5 shadow-sm flex items-center justify-center rounded-xl'
                    }
                  >
                    <div className="grid grid-cols-1">
                      <div className="m-auto text-[45px] w-[100px] h-[100px] dark:bg-zinc-600 bg-gray-200 rounded-full flex justify-center items-center">
                        <ReactIcon
                          icon={cards.icon}
                          className="dark:text-gray-300 text-gray-500"
                        />
                      </div>
                      <h1 className="block md:pt-4 pt-6 md:pb-6 text-lg md:text-2xl font-bold dark:text-gray-200">
                        {cards.title}
                      </h1>
                    </div>
                  </div>
                  <div className="hidden md:flex dark:group-hover:text-yellow-500 group-hover:text-yellow-600 relative bottom-[30px] sm:left-[96px] rounded-full w-14 h-14 dark:border-zinc-600 border dark:bg-zinc-700 bg-gray-100 items-center justify-center">
                    <ReactIcon icon="FiArrowRight" className="w-4 h-5" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

function BackgroundIllustration(props: any) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="hidden xl:block absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
