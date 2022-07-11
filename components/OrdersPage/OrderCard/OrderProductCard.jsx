import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'

function OrderProductCard({ product, order }) {
    console.log(product)
    return (
        <li key={product.product.id} className="p-4 sm:p-6">
            <div className="flex items-center sm:items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
                    <img
                        src={product.product.images[0]}
                        alt={product.product.title}
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="flex-1 ml-6 text-sm">
                    <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                        <h5>{product.product.title}</h5>
                        <p className="mt-2 sm:mt-0">₹ {product.product.price}</p>
                    </div>
                    <p className="hidden text-gray-500 sm:block sm:mt-2">{product.product.description}</p>
                </div>
            </div>

            <div className="mt-6 sm:flex sm:justify-end">
                {/*<div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
                    <p className="ml-2 text-sm font-medium text-gray-500">
                        Delivered on <time dateTime={order.deliveredDatetime}>{order.deliveredDate}</time>
                    </p>
                </div>*/}

                <div className="mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                    <div className="flex-1 flex justify-center">
                        <a
                            href={`/products/${product.product.slug}`}
                            className="text-indigo-600 whitespace-nowrap hover:text-indigo-500"
                        >
                            View product
                        </a>
                    </div>
                    <div className="flex-1 pl-4 flex justify-center">
                        <a href="#" className="text-indigo-600 whitespace-nowrap hover:text-indigo-500">
                            Buy again
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default OrderProductCard