import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import DarkMode from "@components/DarkMode";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";
import { useRef } from "react";
import {
  MenuIcon,
  StoryIcon,
  LocationIcon
} from "@components/Icons";
import {
  MenuIcon as HamburgerIcon,
  XIcon
} from "@heroicons/react/outline";
import { Fragment } from "react";

const logo = {
  title: "Ger Bar",
  subTitle: "Taproom",
  imageUrl: "/logo.jpg",
  imageDescription: "Logo",
};

const menu = [
  { index: 1, name: "Menu", href: "/", current: false, icon: MenuIcon },
  {
    index: 2,
    name: "Our Story",
    href: "/story",
    current: false,
    icon: StoryIcon,
  },
  {
    index: 3,
    name: "Location",
    href: "/location",
    current: false,
    icon: LocationIcon,
  },
];

export default function Navigation() {
  const { pathname } = useRouter();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <Popover
      as="nav"
      className="sticky top-0 z-10 border-b bg-gray-50 dark:bg-gray-800 backdrop-filter backdrop-blur-xl bg-opacity-60 dark:bg-opacity-80 opacity-100 dark:opacity-90  border-gray-200 dark:border-gray-700"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between py-2 md:justify-start">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <div className="inline-flex items-center px-4">
                  <span className="sr-only">{logo.imageDescription}</span>
                  <img
                    src={logo.imageUrl}
                    className="flex-shrink-0 h-12 w-12 rounded-full"
                  />
                  <div className="ml-2">
                    <div className="text-base font-medium text-gray-600 dark:text-white">
                      {logo.title}
                    </div>
                    <div className="text-sm font-base text-gray-500 dark:text-gray-400">
                      {logo.subTitle}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-2 my-4 md:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="bg-gray-50 dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 :ring-blue-600 dark:focus:ring-lime-600 transition duration-500 ease-in-out">
                  <span className="sr-only">Open menu</span>
                  <HamburgerIcon className="h-8 w-8" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:inline-flex space-x-10">
                {menu.map(({ href, name, index }) => (
                  <Link href={href}>
                    <a
                      key={index}
                      className={classNames(
                        pathname == href
                          ? "border-blue-600 dark:border-lime-600 text-gray-900 dark:text-white"
                          : "border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-lime-600 hover:text-gray-700 dark:hover:text-gray-300",
                        "inline-flex items-center border-b-2 px-1 pt-1 text-base font-medium transition duration-500 ease-in-out"
                      )}
                    >
                      {name}
                    </a>
                  </Link>
                ))}
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-50 dark:bg-gray-800">
                    <div className="pt-5 pb-6 px-5 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center">
                          <span className="sr-only">
                            {logo.imageDescription}
                          </span>
                          <img
                            src={logo.imageUrl}
                            className="flex-shrink-0 h-12 w-12 rounded-full"
                          />
                          <div className="ml-2">
                            <div className="text-base font-medium text-gray-600 dark:text-white">
                              {logo.title}
                            </div>
                            <div className="text-sm font-base text-gray-500 dark:text-gray-400">
                              {logo.subTitle}
                            </div>
                          </div>
                        </div>
                        <div>
                          <Popover.Button className="bg-gray-50 dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 :ring-blue-600 dark:focus:ring-lime-600 transition duration-500 ease-in-out">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-8 w-8" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="py-6 px-5">
                      <nav className="grid grid-cols-1 gap-7">
                        {menu.map((item) => (
                          <Link href={item.href}>
                            <a
                              key={item.index}
                              className="-m-3 p-3 flex items-center rounded-lg text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 :ring-blue-600 dark:focus:ring-lime-600 transition duration-500 ease-in-out"
                            >
                              <div
                                className={classNames(
                                  pathname == item.href
                                    ? "bg-blue-600 dark:bg-lime-600"
                                    : "bg-transparent",
                                  "flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-gray-500 dark:text-gray-400"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    pathname == item.href
                                      ? "text-white"
                                      : "text-gray-400 dark:text-gray-500",
                                    "h-6 w-6"
                                  )}
                                  aria-hidden="true"
                                />
                              </div>
                              <div
                                className={classNames(
                                  pathname == item.href
                                    ? "text-blue-600 dark:text-lime-600"
                                    : "text-gray-500 dark:text-gray-400",
                                  "ml-4 text-base font-medium"
                                )}
                              >
                                {item.name}
                              </div>
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>

              <div className="hidden md:inline-flex items-center justify-end md:flex-1 lg:w-0">
                <DarkMode />
              </div>
            </div>
          </div>
        </>
      )}
    </Popover>
  );
}
