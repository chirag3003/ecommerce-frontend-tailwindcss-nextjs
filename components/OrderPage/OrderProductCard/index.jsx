import React from 'react'

function OrderProductCard({ product }) {
    return (
        <div className="py-10 border-b border-gray-200 flex space-x-6">
            <img
                src={product.product.images[0]}
                alt={product.product.images[0]}
                className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
            />
            <div className="flex-auto flex flex-col">
                <div>
                    <h4 className="font-medium text-indigo-600">
                        <a href={`/products/${product.product._id}`}>{product.product.title}</a>
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">{product.product.description}</p>
                </div>
                <div className="mt-6 flex-1 flex items-end">
                    <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                        <div className="flex">
                            <dt className="font-medium text-indigo-600">Quantity</dt>
                            <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                        </div>
                        <div className="pl-4 flex sm:pl-6">
                            <dt className="font-medium text-indigo-600">Price</dt>
                            <dd className="ml-2 text-gray-700">₹ {product.product.price}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default OrderProductCard