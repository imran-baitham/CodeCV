import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import { userNotifaction } from '../../mocks/mocks'
import { ReactIcon } from '../ReactIcon/ReactIcon'
import { Fragment } from 'react'
import { classNames } from '../Utils/Utils'

function SubNotfication() {
  return (
    <div>
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
          <Menu.Items className="origin-top-right absolute z-40 -right-[95px] w-[320px] md:right-0 mt-4 md:mt-2 md:w-96 rounded-md shadow-lg py-1 dark:bg-zinc-700 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border-l-2 border-yellow-500">
            {userNotifaction.map((item: any) => (
              <Menu.Item key={item.title}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? 'dark:bg-zinc-600 bg-gray-100' : '',
                      'block px-4 py-2 text-sm dark:text-white text-gray-700',
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
    </div>
  )
}

export default SubNotfication
