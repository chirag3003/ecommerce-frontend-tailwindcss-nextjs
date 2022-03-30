import React, { Fragment } from 'react';
import NavbarStyle from "./Navbar.style"
import { ShoppingCartIcon, UserCircleIcon, HeartIcon } from "@heroicons/react/outline"
import { Menu, Transition } from "@headlessui/react";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function Index() {
    return (<NavbarStyle className={"flex flex-wrap place-items-center"}>
        <section className="relative mx-auto">

            <nav className="flex justify-between bg-gray-900 text-white w-screen">
                <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                    <a className="text-3xl font-bold font-heading" href="#">
                        Logo Here.
                    </a>
                    <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><a className="hover:text-gray-200" href="#">Home</a></li>
                        <li><a className="hover:text-gray-200" href="#">Category</a></li>
                        <li><a className="hover:text-gray-200" href="#">Collections</a></li>
                        <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
                    </ul>
                    <div className="hidden xl:flex items-center space-x-5 items-center">
                        <a className="hover:text-gray-200" href="#">
                            <HeartIcon className={"w-6 h-6 text-white"} />
                        </a>
                        <a className="flex items-center hover:text-gray-200" href="#">
                            <ShoppingCartIcon className={"text-white h-6 w-6"} />
                            <span className="flex absolute -mt-5 ml-4">
                                <span
                                    className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <a className="flex items-center hover:text-gray-200" href="#">
                            <UserCircleIcon className={"w-6 h-6 text-white"} />
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Settings
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Sign out
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </a>

                    </div>
                </div>
                <a className="xl:hidden flex mr-6 items-center" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                        </span>
                    </span>
                </a>
                <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
            </nav>

        </section>
    </NavbarStyle>);
}

export default Index;