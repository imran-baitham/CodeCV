import { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { classNames, ReactIcon } from '../index'
import { Divider } from '@mantine/core'

const projects = [
  {
    id: 1,
    name: 'HTMl',
    category: 'Projects',
    url: '#',
  },
  {
    id: 2,
    name: 'CSS',
    category: 'Projects',
    url: '#',
  },
  {
    id: 3,
    name: 'JavaScript',
    category: 'Projects',
    url: '###',
  },
  {
    id: 4,
    name: 'BootStrip',
    category: 'Projects',
    url: '#',
  },
  {
    id: 5,
    name: 'React Js',
    category: 'Projects',
    url: '#',
  },
  {
    id: 5,
    name: 'Talwint css',
    category: 'Projects',
    url: '#',
  },
  {
    id: 5,
    name: 'create react app',
    category: 'app',
    url: '/blogs',
  },
  // More projects...
]
const firstNavigation = [
  { name: 'Website redesign', href: '/report' },
  { name: 'GraphQL API', href: '#' },
  { name: 'Customer migration guides', href: '#' },
]
const secondaryNavigation = [
  { name: 'Website redesign', href: '/blog' },
  { name: 'GraphQL API', href: '#' },
  { name: 'Customer migration guides', href: '#' },
]
const thirdNavigation = [
  { name: 'Website redesign', href: '/docs' },
  { name: 'GraphQL API', href: '#' },
  { name: 'Profit sharing program', href: '#' },
]
const forthNavigation = [
  { name: 'GraphQL API', href: '/projects' },
  { name: 'Customer migration guides', href: '#' },
  { name: 'Profit sharing program', href: '#' },
]

type SearchProps = {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

export const SearchBar: React.FC<SearchProps> = ({ isOpen, setIsOpen }) => {
  const [rawQuery, setRawQuery] = useState('')

  const query = rawQuery.toLowerCase().replace(/^[#>]/, '')

  const filteredProjects =
    rawQuery === '#'
      ? projects
      : query === '' || rawQuery.startsWith('>')
      ? []
      : projects.filter((project) => project.name.toLowerCase().includes(query))

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setRawQuery('')}
      appear
    >
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop fixed inset-0 bg-opacity-25 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="p-1 mx-auto max-w-2xl transform overflow-hidden rounded-md dark:bg-zinc-700 bg-white shadow-2xl transition-all">
              <Combobox
                onChange={(item: any) => (window.location = item.url)}
                value=""
              >
                <div className="relative">
                  <ReactIcon
                    className="pointer-events-none absolute top-4 left-4 text-2xl dark:text-gray-100 text-gray-800"
                    icon="IoIosSearch"
                  />
                  <Combobox.Input
                    className="h-14 w-full border-0 focus:outline-none bg-transparent pl-14 pr-4 dark:text-white text-gray-800 dark:placeholder-gray-200 placeholder-gray-400 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setRawQuery(event.target.value)}
                  />
                  <kbd
                    className={classNames(
                      'hidden md:block mx-1 flex h-5 px-2 items-center justify-center rounded border dark:text-white dark:bg-zinc-800 bg-white font-semibold sm:mx-2 absolute top-4 right-2 text-sm',
                      rawQuery.startsWith('#')
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-gray-400 text-gray-900',
                    )}
                  >
                    esc
                  </kbd>
                  <kbd
                    className={
                      'block md:hidden mx-1 flex px-2 items-center justify-center rounded border dark:text-white dark:bg-zinc-800 bg-white font-semibold sm:mx-2 absolute top-4 right-2 text-sm cursor-pointer'
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    x
                  </kbd>
                </div>
                <Divider className="w-full bg-black w-full h-1" />

                {filteredProjects.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-py-10 scroll-py-10 scroll-pb-2 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
                  >
                    {filteredProjects.length > 0 && (
                      <li>
                        <h2 className="text-md font-bold dark:text-gray-200 text-gray-800">
                          Recent
                        </h2>
                        <ul className="-mx-4 mt-2 text-sm text-gray-700">
                          {filteredProjects.map((project) => (
                            <Combobox.Option
                              key={project.id}
                              value={project}
                              className={({ active }) =>
                                classNames(
                                  'flex cursor-default select-none items-center px-5 py-5 rounded-xl border border-1 border-transparent dark:text-white text-black',
                                  active
                                    ? 'dark:bg-zinc-900 bg-gray-200 dark:text-white text-black border border-1 border-black'
                                    : '',
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <ReactIcon
                                    icon="BsFolderPlus"
                                    className={classNames(
                                      'h-6 w-6 flex-none',
                                      active
                                        ? 'dark:text-gray-200 text-black'
                                        : 'text-gray-400',
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 flex-auto truncate">
                                    {project.name}
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {rawQuery === '?' && (
                  <div className="py-14 px-6 text-center text-sm sm:px-14">
                    <ReactIcon
                      icon="BiSupport"
                      className="mx-auto h-6 w-6"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold dark:text-gray-100 text-gray-900">
                      Help with searching
                    </p>
                    <p className="mt-2 dark:text-gray-300 text-gray-500">
                      Use this tool to quickly search for users and projects
                      across our entire platform. You can also use the search
                      modifiers found in the footer below to limit the results
                      to just users or projects.
                    </p>
                  </div>
                )}

                {query !== '' &&
                  rawQuery !== '?' &&
                  filteredProjects.length === 0 && (
                    <div className="py-14 px-6 text-center text-sm sm:px-14">
                      <ReactIcon
                        icon="BsExclamationTriangle"
                        className="mx-auto h-6 w-6 text-gray-200"
                        aria-hidden="true"
                      />
                      <p className="mt-4 font-semibold dark:text-gray-100 text-gray-900">
                        No results found
                      </p>
                      <p className="mt-2 dark:text-gray-300 text-gray-500">
                        We couldn???t find anything with that term. Please try
                        again.
                      </p>
                    </div>
                  )}

                {query === '' && filteredProjects.length === 0 && (
                  <div className="grid grid-cols-2 gap-4 items-center justify-between dark:bg-zinc-900 bg-gray-100 py-2.5 px-4 mt-2 text-xs text-gray-700 pb-8">
                    {/* ssecond nav */}
                    <div className="mt-8">
                      <h3
                        className="px-3 text-sm font-bold dark:text-gray-400 text-gray-500"
                        id="projects-headline"
                      >
                        Getting started
                      </h3>
                      <div
                        className="mt-1 space-y-1"
                        aria-labelledby="projects-headline"
                      >
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            href="#"
                            className="group flex items-center px-3 py-1 text-sm font-light text-blue-800 hover:underline hover:underline-offset-4 rounded-md hover:text-blue-600"
                          >
                            <span className="truncate">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    {/* first nav */}
                    <div className="mt-8">
                      <h3
                        className="px-3 text-sm font-bold dark:text-gray-400 text-gray-500"
                        id="projects-headline"
                      >
                        Popular searches
                      </h3>
                      <div
                        className="mt-1 space-y-1"
                        aria-labelledby="projects-headline"
                      >
                        {firstNavigation.map((item) => (
                          <a
                            key={item.name}
                            href="#"
                            className="group flex items-center px-3 py-1 text-sm font-light text-blue-800 rounded-md hover:text-blue-600"
                          >
                            <span className="truncate">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    {/* third nav */}
                    <div className="mt-8">
                      <h3
                        className="px-3 text-sm font-bold dark:text-gray-400 text-gray-500"
                        id="projects-headline"
                      >
                        Customization
                      </h3>
                      <div
                        className="mt-1 space-y-1"
                        aria-labelledby="projects-headline"
                      >
                        {thirdNavigation.map((item) => (
                          <a
                            key={item.name}
                            href="#"
                            className="group flex items-center px-3 py-1 text-sm font-light text-blue-800 rounded-md hover:text-blue-600"
                          >
                            <span className="truncate">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    {/* forth nav */}
                    <div className="mt-8">
                      <h3
                        className="px-3 text-sm font-bold dark:text-gray-400 text-gray-500"
                        id="projects-headline"
                      >
                        System
                      </h3>
                      <div
                        className="mt-1 space-y-1"
                        aria-labelledby="projects-headline"
                      >
                        {forthNavigation.map((item) => (
                          <a
                            key={item.name}
                            href="#"
                            className="group flex items-center px-3 py-1 text-sm font-light text-blue-800 rounded-md hover:text-blue-600"
                          >
                            <span className="truncate">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <hr className="mt-3" />
                <div className="flex flex-wrap items-center justify-between dark:bg-zinc-700 bg-gray-50 py-2.5 px-4 mt-2 text-xs text-gray-700">
                  <div className="flex items-center">
                    <span className="text-gray-300 font-medium">For help</span>
                    <kbd
                      className={classNames(
                        'mx-1 flex h-5 px-2 items-center justify-center rounded dark:bg-zinc-800 dark:text-white bg-white font-semibold sm:mx-2',
                        rawQuery.startsWith('#')
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-gray-400 text-gray-900',
                      )}
                    >
                      ?
                    </kbd>
                  </div>

                  <div className="flex dark:text-white">
                    create by
                    <kbd
                      className={classNames(
                        'mx-1 flex h-5 px-1 items-center justify-center rounded border dark:bg-zinc-800 dark:text-white bg-white font-semibold sm:mx-2',
                        rawQuery === '?'
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-gray-400 text-gray-900',
                      )}
                    >
                      imran baitham
                    </kbd>
                  </div>
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
