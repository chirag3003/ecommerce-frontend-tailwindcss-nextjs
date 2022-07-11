    import React from 'react'
import { CheckIcon, ClockIcon, XIcon as XIconSolid } from '@heroicons/react/solid'


function CartProductCart({ product,size,stock,quantity,remove,setQuantity, productIdx }) {

    const changeQuantity = (evt) => {
        setQuantity(product._id,size,evt.target.value)
    }
    const removeItem=(evt) => {
        remove(product._id,size)
    }


    return (
        <li key={product.id} className="flex py-6 sm:py-10">
            <div className="flex-shrink-0">
                <img
                    src={product.images[0]}
                    alt={""}
                    className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                />
            </div>

            <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                        <div className="flex justify-between">
                            <h3 className="text-sm">
                                <a href={`/products/${product.slug}`} className="font-medium text-gray-700 hover:text-gray-800">
                                    {product.title}
                                </a>
                            </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                            {/*<p className="text-gray-500">{product.color}</p>*/}
                            {size ? (
                                <p className="pl-4 border-l border-gray-200 text-gray-500">{size}</p>
                            ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">₹ {product.price}</p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                            Quantity, {product.title}
                        </label>
                        <select
                            id={`quantity-${productIdx}`}
                            name={`quantity-${productIdx}`}
                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={quantity}
                            onChange={changeQuantity}
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

                        <div className="absolute top-0 right-0">
                            <button onClick={removeItem} type="button" className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Remove</span>
                                <XIconSolid className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>

                <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                    {stock<quantity ? (
                        <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                    ) : (
                        <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                    )}

                    <span>{stock>quantity ? 'In stock' : `Ships in few days`}</span>
                </p>
            </div>
        </li>
    )
}

export default CartProductCart