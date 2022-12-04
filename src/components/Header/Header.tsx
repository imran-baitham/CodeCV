/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Theme } from '../index'
import { ReactIcon, SearchBar } from '../index'
import Link from 'next/link'
import { PrograssBar } from '../index'
import SideBarMini from './SideBarMin/SideBarMini'
import clsx from 'clsx'
import SubNotfication from './noti'
import { Drawer, Transition } from '@mantine/core'

interface dataProps {
  title: string
  subtitle: string
  icon: any
  href: string
}

const solutions = [
  {
    name: 'Documentation',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/blogs',
    icon: 'CgFileDocument',
  },
  {
    name: 'Video Tutorial',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/videostutorial',
    icon: 'MdOndemandVideo',
  },
  {
    name: 'Free Templates',
    description: "Your customers' data will be safe and secure.",
    href: '/templetes?item',
    icon: 'CgTemplate',
  },
  {
    name: 'Company', //'Community',
    description: "Connect with third-party tools that you're already using.",
    href: '/aboutus',
    icon: 'BsBuilding',
  },
]

const dropdowndata: dataProps[] = [
  {
    title: 'Documentation',
    subtitle: 'Guides, tutorials and API reference',
    icon: '',
    href: '/',
  },
  {
    title: 'Community forum ',
    subtitle: 'Ask questions and discuss with your peers',
    icon: '',
    href: '/',
  },
  {
    title: 'Blog',
    subtitle: 'Culture, learnings, and announcements',
    icon: '',
    href: '/',
  },
  {
    title: 'Slack channel',
    subtitle: 'Chat live with other devs in our Slack channel',
    icon: '',
    href: '/',
  },
  {
    title: 'Product updates',
    subtitle: 'Changelog for new features improvements',
    icon: '',
    href: '/',
  },
  {
    title: 'Support',
    subtitle: 'Got questions? Get in touch with our team',
    icon: 'BsCheckCircle',
    href: '/',
  },
]

const demoone = {
  title: 'HAPPY TEAM',
  data: [
    { title: 'For developers', icon: 'BsCheckCircle' },
    { title: 'For digital marketers', icon: 'BsCheckCircle' },
    { title: 'For content creators', icon: 'BsCheckCircle' },
  ],
}

const demotwo = {
  title: 'READY INTEGRATIONS WITH',
  data: [
    'Next',
    'Gatsby',
    'Nuxt',
    'Vercel',
    'Remix',
    'Netlify',
    'Jekyll',
    'Hugo',
    'Vue',
    'React',
  ],
}

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [navbar, setNavbar] = useState<boolean>(false)
  let [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, {})
    }
  }, [])

  return (
    <div className="mb-[70px] dark:bg-zinc-800">
      <header
        className={clsx(
          'header fixed top-0 left-0 right-0 z-20 dark:bg-zinc-800 bg-white',
          isScrolled
            ? 'shadow-lg backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-zinc-800/75 [@supports(backdrop-filter:blur(0))]:bg-white/80'
            : 'shadow-sm',
        )}
      >
        <nav className="flex items-center justify-between h-16 md:h-20 container_main">
          <Link href={'/'}>
            <h1 className="pl-3 cursor-pointer md:text-xl font-[550] text-yellow-500 hover:text-blue-100 group">
              <span className="border px-[3px] border-yellow-400 font-bold group-hover:border-blue-300">
                book
              </span>
              <span className="underline pl-[2px]">C</span>ler
            </h1>
          </Link>

          <div className="flex space-x-4 hidden md:flex items-center justify-center">
            <div className="text-md group outline-none">
              <div className="cursor-pointer inline-flex items-center">
                <span>Courses</span>
                <ReactIcon
                  icon="RiArrowDownSFill"
                  className="h-5 w-5 group-hover:rotate-[180deg]"
                />
              </div>
              <div className="hidden group-hover:block fixed top-[52px] right-[10px] lg:right-[80px] xl:right-[400px]">
                <div className="shadow-xl bg-white dark:bg-zinc-700 mt-8 lg:w-[900px] rounded p-4 flex justify-between">
                  <div className="shaper shadow absolute h-[460px] w-[245px] rounded top-8 left-0 z-[1px] bg-yellow-100 dark:bg-zinc-600" />

                  <div className="w-[230px] z-10">
                    <h2 className="font-bold text-sm pb-1 pt-3">
                      {demoone.title}
                    </h2>
                    {demoone.data.map(
                      (data: { icon: any; title: string }, index) => {
                        return (
                          <div key={index} className="flex items-center py-1">
                            <ReactIcon
                              className="text-green-600"
                              icon={data.icon}
                            />
                            <span className="text-sm pl-1">{data.title}</span>
                          </div>
                        )
                      },
                    )}
                    <h2 className="font-bold text-sm pb-1 pt-5">
                      {demotwo.title}
                    </h2>
                    <div className="flex flex-wrap w-[190px] py-2">
                      {demotwo.data.map((data, index) => {
                        return (
                          <div key={index} className="py-1 m-1 cursor-pointer">
                            <Link href={'/'}>
                              <span className="text-sm py-1 dark:bg-zinc-500 bg-gray-100 rounded-full px-3">
                                {data}
                              </span>
                            </Link>
                          </div>
                        )
                      })}
                    </div>
                    <Link href={'/'}>
                      <span className="text-yellow-500 text-sm pl-2 cursor-pointer">
                        Find With Us
                      </span>
                    </Link>
                  </div>
                  <div className="w-auto ml-14 z-10">
                    <div className="grid grid-cols-2 gap-8 p-3">
                      {solutions.map((item: any) => (
                        <div
                          key={item.name}
                          className="border-l-2 border-yellow-200 -m-3 cursor-pointer flex flex-col justify-between rounded-lg p-4 dark:hover:bg-zinc-600 hover:bg-gray-100"
                        >
                          <Link href={item.href}>
                            <div className="flex md:h-full lg:flex-col">
                              <div className="flex-shrink-0">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                  <ReactIcon
                                    icon={item.icon}
                                    className="h-6 w-6"
                                  />
                                </span>
                              </div>
                              <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                <div>
                                  <p className="text-base font-medium">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm dark:text-gray-400 text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                                <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                  Learn more
                                  <span aria-hidden="true"> &rarr;</span>
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/blogs"
              className="text-md group inline-flex items-center outline-none"
            >
              Blogs
            </Link>
            <Link
              href={'/contact?us'}
              className="text-md group inline-flex items-center outline-none"
            >
              Contact Us
            </Link>
            <div className="text-md group outline-none">
              <div className="cursor-pointer inline-flex items-center">
                <span>More</span>
                <ReactIcon
                  icon="RiArrowDownSFill"
                  className="h-5 w-5 group-hover:rotate-[180deg]"
                />
              </div>
              <div className="hidden group-hover:block fixed top-[52px] right-[20px] lg:right-[160px] xl:right-96">
                <div className="grid grid-cols-2 gap-5 border dark:border-zinc-600 shadow-xl bg-white dark:bg-zinc-700 mt-8 w-[600px] rounded px-8 py-6 flex justify-between">
                  <div className="shaper shadow absolute h-[320px] w-[230px] rounded top-8 left-0 z-[1px] bg-yellow-100 dark:bg-zinc-600" />
                  {dropdowndata.map((item: dataProps) => {
                    return (
                      <Link key={item.title} href={item.href}>
                        <div className="z-10 w-full cursor-pointer transition ease-in-out delay-150 hover:-translate-x-1 duration-300 hover:border-l-2 pl-2 border-yellow-500">
                          <div className="flex items-center">
                            <h1 className="font-bold pr-1">{item.title}</h1>
                            <ReactIcon icon={item.icon} />
                          </div>
                          <span className="text-md text-gray-600 dark:text-gray-200">
                            {item.subtitle}
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-[160px] md:w-[120px]">
            <SubNotfication />
            <Theme />
            <button
              className="border border-1 dark:border-white border-black p-[6px] outline-none"
              onClick={() => setIsOpen(true)}
            >
              <ReactIcon icon="RiSearchFill" className="w-5 h-5" />
            </button>
            <button
              className="block md:hidden border border-1 dark:border-white border-black p-[6px] outline-none"
              onClick={() => setNavbar(true)}
            >
              <ReactIcon icon="CgMenuRightAlt" className="w-5 h-5" />
            </button>
          </div>
        </nav>
        {isOpen && <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />}

        {navbar && <SideBarMini navbar={navbar} setNavbar={setNavbar} />}

        <PrograssBar />
      </header>
    </div>
  )
}
