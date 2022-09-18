import React, { useState } from "react";
import { Theme } from "../index";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ReactIcon, SearchBar, classNames } from "../index";
import Link from "next/link";
import { PrograssBar } from "../index";

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
    <div className="pb-32 dark:bg-zinc-800 bg-white">
      <header className="header fixed top-0 left-0 right-0 shadow-lg z-20 dark:bg-zinc-800 bg-white">
        <nav className="flex items-center justify-between h-20 container_main">
          <Link href={"/"}>
            <h1 className="cursor-pointer font-bold text-2xl text-yellow-500">
              Welcome
            </h1>
          </Link>

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
                <Menu.Items className="origin-top-right absolute -right-[75px] w-[320px] md:right-0 mt-4 md:mt-2 md:w-96 rounded-md shadow-lg py-1 dark:bg-zinc-700 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border-l-2 border-yellow-500">
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
