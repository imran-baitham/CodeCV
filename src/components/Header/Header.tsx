import React, { useState } from "react";
import { Theme } from "../index";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ReactIcon, SearchBar, classNames } from "../index";
import Link from "next/link";
import { PrograssBar } from "../index";
// =============================================
import { Popover } from "@headlessui/react";
import {
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "View All Products", href: "#", icon: CheckCircleIcon },
  { name: "Contact Us", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "About", href: "#", icon: InformationCircleIcon },
  { name: "Customers", href: "#", icon: BuildingOfficeIcon },
  { name: "Press", href: "#", icon: NewspaperIcon },
  { name: "Careers", href: "#", icon: BriefcaseIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];
const resources = [
  { name: "Community", href: "#", icon: UserGroupIcon },
  { name: "Partners", href: "#", icon: GlobeAltIcon },
  { name: "Guides", href: "#", icon: BookmarkSquareIcon },
  { name: "Webinars", href: "#", icon: ComputerDesktopIcon },
];
const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
  },
];

// ==========================
export const userNotifaction = [
  {
    title: "Get a first look at Joy DoYar 😍",
    subtext:
      "Joy UI is MUI's new starting point for your design system. Check out the blog post to see what's in store for this new library.",
    href: "#",
  },
  {
    title: "Premium passengers, please proceed to the boarding gate 🚀",
    subtext: "Our docs just got a major upgrade!",
    href: "#",
  },
  {
    title: "Noti_fi_cation",
    subtext:
      "You can follow us on Twitter to receive exclusive tips and updates about MUI and the React ecosystem ❣️.",
    href: "#",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-[70px] dark:bg-zinc-800 bg-white">
      <header className="header fixed top-0 left-0 right-0 shadow-lg z-20 dark:bg-zinc-800 bg-white">
        <nav className="flex items-center justify-between h-20 container_main">
          <Link href={"/"}>
            <h1 className="cursor-pointer text-2xl text-yellow-500">
              Code_<span className="font-bold">Vision</span>
            </h1>
          </Link>

          {/*  */}
          <Popover.Group
            as="nav"
            className="flex space-x-5 hidden md:flex items-center justify-center"
          >
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-00" : "",
                      "text-md group inline-flex items-center outline-none p-[6px]"
                    )}
                  >
                    <span>Solutions</span>
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
                    <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform dark:bg-zinc-800 bg-white shadow-lg md:block">
                      <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-12">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex flex-col justify-between rounded-lg p-4 dark:hover:bg-zinc-700 hover:bg-gray-100"
                          >
                            <div className="flex md:h-full lg:flex-col">
                              <div className="flex-shrink-0">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                  <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
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
                          </a>
                        ))}
                      </div>
                      <div className="dark:bg-zinc-700 bg-gray-50">
                        <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3 dark:text-gray-300">
                                  {item.name}
                                </span>
                              </a>
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
              href={"/contact"}
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
                    <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform shadow-lg sm:block">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 dark:bg-zinc-700 bg-white" />
                        <div className="w-1/2 dark:bg-zinc-800 bg-gray-50 border-b-2 border-yellow-600" />
                      </div>
                      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                        <nav className="grid gap-y-10 px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12 dark:bg-zinc-700">
                          <div>
                            <h3 className="text-base font-medium dark:text-gray-300 text-gray-500">
                              Company
                            </h3>
                            <ul role="list" className="mt-5 space-y-6">
                              {company.map((item) => (
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
                          <div>
                            <h3 className="text-base font-medium dark:text-gray-300 text-gray-500">
                              Resources
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
                        <div className="dark:bg-zinc-800 bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12 border-b-2 border-yellow-600">
                          <div>
                            <h3 className="text-base font-medium dark:text-gray-300 text-gray-500">
                              From the blog
                            </h3>
                            <ul role="list" className="mt-6 space-y-6">
                              {blogPosts.map((post) => (
                                <li key={post.id} className="flow-root">
                                  <a
                                    href={post.href}
                                    className="-m-3 flex rounded-lg p-3 dark:hover:bg-zinc-700 hover:bg-gray-100"
                                  >
                                    <div className="hidden flex-shrink-0 sm:block">
                                      <img
                                        className="h-20 w-32 rounded-md object-cover"
                                        src={post.imageUrl}
                                        alt=""
                                      />
                                    </div>
                                    <div className="w-0 flex-1 sm:ml-4">
                                      <h4 className="truncate text-base font-medium dark:text-gray-300 text-gray-900">
                                        {post.name}
                                      </h4>
                                      <p className="mt-1 text-sm dark:text-gray-400 text-gray-500">
                                        {post.preview}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-6 text-sm font-medium">
                            <a
                              href=""
                              className="text-indigo-600 hover:text-indigo-500"
                            >
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
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
                  {userNotifaction.map((item) => (
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
              className="border border-1 dark:border-white border-black p-[6px]"
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
