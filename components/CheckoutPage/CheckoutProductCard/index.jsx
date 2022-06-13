import React from 'react';
import {TrashIcon} from "@heroicons/react/solid";

function CheckoutProductCard({product,index,size,setQuantity,remove,quantity}) {
    const changeQuantity = (evt) => {
        setQuantity(product._id,size,evt.target.value)
    }
    const removeItem=(evt) => {
        remove(product._id,size)
    }
    return (
        <li  className="flex py-6 px-4 sm:px-6">
            <div className="">
                <img src={product.images[0]} alt={""} className="w-24 rounded-md" />
            </div>

            <div className="ml-6 flex-1 flex flex-col">
                <div className="flex">
                    <div className="min-w-0 flex-1">
                        <h4 className="text-sm">
                            <a href={`/products/${product._id}`} className="font-medium text-lg text-gray-700 hover:text-gray-800">
                                {product.title}
                            </a>
                        </h4>
                        {/*<p className="mt-1 text-sm text-gray-500">{product.color}</p>*/}
                        <p className="mt-1 text-sm text-gray-500">{size}</p>
                    </div>

                    <div className="ml-4 flex-shrink-0 flow-root">
                        <button
                            type="button"
                            onClick={removeItem}
                            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Remove</span>
                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 pt-2 flex items-end justify-between">
                    <p className="mt-1 text-sm font-medium text-gray-900">₹ {product.price}</p>

                    <div className="ml-4">
                        <label htmlFor={`quantity-${index}`} className="sr-only">
                            Quantity
                        </label>
                        <select
                            id={`quantity-${index}`}
                            name="quantity"
                            value={quantity}
                            onChange={changeQuantity}
                            className="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                        </select>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default CheckoutProductCard;