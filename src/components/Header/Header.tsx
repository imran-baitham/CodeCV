/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Theme } from "../index";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ReactIcon, SearchBar, classNames } from "../index";
import Link from "next/link";
import { PrograssBar } from "../index";

import { Popover } from "@headlessui/react";
import {
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
// import Image from "next/image";
import { userNotifaction } from "../../mocks/mocks";

const solutions = [
  {
    name: "Documentation",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/blogs",
    icon: "CgFileDocument",
  },
  {
    name: "Video Tutorial",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/videostutorial",
    icon: "MdOndemandVideo",
  },
  {
    name: "Free Templates",
    description: "Your customers' data will be safe and secure.",
    href: "/templetes?item",
    icon: "CgTemplate",
  },
  {
    name: "Community",
    description: "Connect with third-party tools that you're already using.",
    href: "/aboutus",
    icon: "BsBuilding",
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "https://www.google.com.pk", icon: "ImPlay" },
  { name: "Contact Us", href: "/contact", icon: "RiContactsLine" },
];
const company = [
  { name: "Quiz", href: "/quiz", icon: InformationCircleIcon },
  { name: "Articles", href: "/", icon: BuildingOfficeIcon },
  { name: "Videos", href: "/videostutorial", icon: NewspaperIcon },
  { name: "Blog", href: "/blogs", icon: BriefcaseIcon },
  { name: "Projects", href: "/templetes?item", icon: ShieldCheckIcon },
];

const resources = [
  { name: "For Individuals", href: "#", icon: UserGroupIcon },
  { name: "For Students", href: "#", icon: GlobeAltIcon },
  { name: "For Teams", href: "#", icon: BookmarkSquareIcon },
  { name: "For Companys", href: "#", icon: ComputerDesktopIcon },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState([]);
  const getData = () => fetch("/api/articles").then((res) => res.json());

  useEffect(() => {
    setTimeout(() => {
      getData().then((product) => setData(product));
    }, 0);
  }, []);

  return (
    <div className="mb-[70px] dark:bg-zinc-800 bg-white">
      <header className="header fixed top-0 left-0 right-0 shadow-lg z-20 dark:bg-zinc-800 bg-white">
        <nav className="flex items-center justify-between h-20 container_main">
          <Link href={"/"}>
            <h1 className="cursor-pointer text-xl font-[550] text-yellow-500 hover:text-blue-100 group">
              <span className="border px-[3px] border-yellow-400 font-bold group-hover:border-blue-300">
                code
              </span>
              <span className="underline pl-[2px]">T</span>echy
            </h1>
          </Link>

          <Popover.Group
            as="nav"
            className="flex space-x-4 hidden md:flex items-center justify-center"
          >
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-00" : "",
                      "text-md group inline-flex items-center outline-none"
                    )}
                  >
                    <span>Courses</span>
                    <ReactIcon
                      icon="RiArrowDownSFill"
                      className={classNames(
                        open ? "rotate-[180deg]" : "",
                        "h-5 w-5"
                      )}
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                  >
                    <Popover.Panel className="border-t-4 dark:border-zinc-700 border-gray-200 absolute inset-x-0 top-full z-10 hidden transform dark:bg-zinc-800 bg-white shadow-lg md:block">
                      <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-12">
                        {solutions.map((item: any) => (
                          <div
                            key={item.name}
                            className="-m-3 cursor-pointer flex flex-col justify-between rounded-lg p-4 dark:hover:bg-zinc-700 hover:bg-gray-100"
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
                      <div className="dark:bg-zinc-700 bg-gray-50">
                        <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                          {callsToAction.map((item: any) => (
                            <div key={item.name} className="flow-root">
                              <Link href={item.href}>
                                <div className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 cursor-pointer">
                                  <ReactIcon
                                    icon={item.icon}
                                    className={
                                      "h-6 w-6 flex-shrink-0 text-gray-400"
                                    }
                                  />
                                  <span className="ml-3 dark:text-gray-300">
                                    {item.name}
                                  </span>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link
              href="/blogs"
              className="text-md group inline-flex items-center outline-none"
            >
              Blogs
            </Link>
            <Link
              href={"/contact?us"}
              className="text-md group inline-flex items-center outline-none"
            >
              Contact Us
            </Link>
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "" : "",
                      "text-md group inline-flex items-center outline-none"
                    )}
                  >
                    <span>More</span>
                    <ReactIcon
                      icon="RiArrowDownSFill"
                      className={classNames(
                        open ? "rotate-[180deg]" : "",
                        "h-5 w-5"
                      )}
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                  >
                    <Popover.Panel className="border-t-2 dark:border-zinc-700 border-gray-200 absolute inset-x-0 top-full z-10 hidden transform shadow-lg sm:block">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 dark:bg-zinc-700 bg-white" />
                        <div className="w-1/2 dark:bg-zinc-800 bg-gray-50" />
                      </div>
                      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                        <nav className="grid gap-y-10 px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12 dark:bg-zinc-700">
                          <div>
                            <h3 className="text-base font-medium dark:text-gray-300 text-gray-500">
                              Resources
                            </h3>
                            <ul role="list" className="mt-5 space-y-6">
                              {company.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <Link href={item.href}>
                                    <div className="cursor-pointer -m-3 flex items-center rounded-md p-3 text-base font-medium dark:text-gray-300 text-gray-900 dark:hover:bg-zinc-800 hover:bg-gray-50">
                                      <item.icon
                                        className="h-6 w-6 flex-shrink-0 dark:text-gray-300 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-4">{item.name}</span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-base font-medium dark:text-gray-300 text-gray-500">
                              Pricing
                            </h3>
                            <ul role="list" className="mt-5 space-y-6">
                              {resources.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 flex items-center rounded-md p-3 text-base font-medium dark:text-gray-300 text-gray-900 dark:hover:bg-zinc-800 hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="h-6 w-6 flex-shrink-0 dark:text-gray-300 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-4">{item.name}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </nav>
                        <div className="dark:bg-zinc-800 bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                          <div>
                            <h3 className="text-base font-bold dark:text-gray-300 text-gray-500">
                              From the blog
                            </h3>
                            <ul
                              role="list"
                              className="mt-6 space-y-0 gap-2 grid grid-cols-2"
                            >
                              {data
                                ?.slice(7, 9)
                                .map(
                                  (post: {
                                    id: number;
                                    imageUrl: any;
                                    title: string;
                                    slug: string;
                                  }) => {
                                    return (
                                      <Link
                                        href={`/blogs/${[post.slug]}`}
                                        passHref
                                        key={post.id}
                                      >
                                        <div
                                          className="shadow items-center grid grid-cols-1 rounded cursor-pointer hover:shadow-md dark:bg-zinc-700"
                                          key={post.id}
                                        >
                                          <div className="">
                                            <img
                                              src={post.imageUrl.src}
                                              alt=""
                                              className="lg:h-[140px] w-full"
                                            />
                                          </div>
                                          <div className="p-3">
                                            <h2 className="font-bold text-lg">
                                              {post.title?.length > 43
                                                ? post.title.slice(0, 42) +
                                                  " ..."
                                                : post.title}
                                            </h2>
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  }
                                )}
                            </ul>
                          </div>
                          <div className="mt-6 text-sm font-medium">
                            <span className="text-indigo-600 hover:text-indigo-500">
                              <Link href={"/blogs"}>View all posts</Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="flex items-center justify-between w-[120px]">
            <Menu as="div" className="relative ml-3">
              <Menu.Button className="border border-1 dark:border-white border-black p-[6px]">
                <ReactIcon icon="RiNotification3Fill" className="w-5 h-5" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute z-40 -right-[75px] w-[320px] md:right-0 mt-4 md:mt-2 md:w-96 rounded-md shadow-lg py-1 dark:bg-zinc-700 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border-l-2 border-yellow-500">
                  {userNotifaction.map((item: any) => (
                    <Menu.Item key={item.title}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "dark:bg-zinc-600 bg-gray-100" : "",
                            "block px-4 py-2 text-sm dark:text-white text-gray-700"
                          )}
                        >
                          <h2 className="text-base font-medium dark:text-gray-100 text-gray-900 underline">
                            {item.title}
                          </h2>
                          <h2 className="dark:text-white text-gray-900">
                            {item.subtext}
                          </h2>
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
            <Theme />
            <button
              className="border border-1 dark:border-white border-black p-[6px] outline-none"
              onClick={() => setIsOpen(true)}
            >
              <ReactIcon icon="RiSearchFill" className="w-5 h-5" />
            </button>
          </div>
        </nav>
        {isOpen && <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />}
        <PrograssBar />
      </header>
    </div>
  );
}
