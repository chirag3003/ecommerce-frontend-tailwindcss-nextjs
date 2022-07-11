import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import OrderProductCard from './OrderProductCard'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function OrderCard({ order }) {
    return (
        <div
            key={order.number}
            className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border"
        >
            <h3 className="sr-only">
                Order placed on <time dateTime={order.createdAt} />
            </h3>

            <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                    <div>
                        <dt className="font-medium text-gray-900">Order number</dt>
                        <dd className="mt-1 text-gray-500">{order.orderID}</dd>
                    </div>
                    <div className="hidden sm:block">
                        <dt className="font-medium text-gray-900">Date placed</dt>
                        <dd className="mt-1 text-gray-500">
                            <time dateTime={order.createdAt}>{order.createdDate}</time>
                        </dd>
                    </div>
                    <div>
                        <dt className="font-medium text-gray-900">Total amount</dt>
                        <dd className="mt-1 font-medium text-gray-900">₹ {order.amount}</dd>
                    </div>
                </dl>

                <Menu as="div" className="relative flex justify-end lg:hidden">
                    <div className="flex items-center">
                        <Menu.Button className="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Options for order {order.number}</span>
                            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
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
                        <Menu.Items className="origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href={"/order/"+order.orderID}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            View
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href={order.invoiceHref}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Invoice
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

                <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                    <a
                        href={"/account/orders/"+order.orderID}
                        className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span>View Order</span>
                        <span className="sr-only">{order.number}</span>
                    </a>
                    <a
                        href={order.invoiceHref}
                        className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span>View Invoice</span>
                        <span className="sr-only">for order {order.number}</span>
                    </a>
                </div>
            </div>

            {/* Products */}
            <h4 className="sr-only">Items</h4>
            <ul role="list" className="divide-y divide-gray-200">
                {order.products.map((product,index) => (
                    <OrderProductCard key={index} product={product} order={order} />
                ))}
            </ul>
        </div>
    )
}

export default OrderCard