import React from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { classNames } from '../../Utils/Utils'
import { ReactIcon } from '../../ReactIcon/ReactIcon'
import Link from 'next/link'

const navigation = [
  { name: 'Projects', href: '/templetes?item', icon: HomeIcon, current: true },
  { name: 'Quiz', href: '/quiz', icon: UsersIcon, current: false },
  { name: 'Articles', href: '/api/articles', icon: FolderIcon, current: false },
  {
    name: 'Videos',
    href: '/videostutorial',
    icon: CalendarIcon,
    current: false,
  },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Blog', href: '/blogs', icon: ChartBarIcon, current: false },
]

interface MiniProps {
  navbar: boolean
  setNavbar: any
}

function SideBarMini(props: MiniProps) {
  const { navbar, setNavbar } = props

  return (
    <div>
      <Transition.Root show={navbar} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setNavbar}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-zinc-700 pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-22 pt-2">
                    <button
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full"
                      onClick={() => setNavbar(false)}
                    >
                      <div className="flex justify-end py-2 px-2">
                        <ReactIcon
                          icon="VscClose"
                          className="cursor-pointer p-1 shadow bg-gray-300 dark:bg-black w-7 h-7 text-black dark:text-white rounded-full hover:rotate-180 ease-out duration-300"
                        />
                      </div>
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  BookCler image
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={classNames(
                            item.current ? '' : '',
                            'bg-gray-300 dark:bg-zinc-800 text-gray-700 dark:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md',
                          )}
                        >
                          <item.icon
                            className="mr-3 h-6 w-6 flex-shrink-0 text-gray-700 dark:text-white"
                            aria-hidden="true"
                          />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default SideBarMini
