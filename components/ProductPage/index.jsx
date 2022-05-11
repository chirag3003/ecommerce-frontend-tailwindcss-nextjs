import {useContext, useEffect, useState} from 'react'
import {MinusIcon, PlusIcon, StarIcon} from '@heroicons/react/solid'
import ImageGallery from './ImageGallery'
import Reviews from './Reviews'
import Highlights from './Highlights'
// import Colors from './Colors'
import Sizes from './Sizes'
import AlsoPurchased from './AlsoPurchased'
import Cart from "helpers/Cart";


const reviews = {
    href: '#',
    average: 4,
    totalCount: 117,
    featured: [
        {
            id: 1,
            title: 'This is the best white t-shirt out there',
            rating: 5,
            content: `
        <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
      `,
            author: 'Mark Edwards',
            avatarSrc:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ],
}
const products = []


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductPage({product}) {
    const cart = useContext(Cart)
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    const addToCart = () => {
        cart.addCartItem(product._id,selectedSize.name)
    }
    const addItem = () => {
        cart.addCartItem(product._id,selectedSize.name)
    }
    const reduceItem = () => {
        cart.reduceItem(product._id,selectedSize.name)
    }

    return (
        <div className="bg-white">
            <main className="pt-10 sm:pt-16">
                <nav aria-label="Breadcrumb">
                    <ol role="list"
                        className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li className="text-sm">
                            <a href={""} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <ImageGallery images={product.images}/>

                {/* Product info */}
                <div
                    className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gray-900">₹ {product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href}
                                   className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>

                        <div className="mt-10">

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Size guide
                                    </a>
                                </div>

                                <Sizes selectedSize={selectedSize} setSelectedSize={setSelectedSize}
                                       sizes={product.sizes}/>
                            </div>
                            <div className="flex items-center justify-between pt-10">

                                {!cart.getCartItem(product._id,selectedSize.name) ?
                                    <button
                                        className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={addToCart}
                                    >
                                        Add to bag
                                    </button> :
                                    <div className={"flex items-center justify-between w-full"}>
                                        <button
                                            className={"bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
                                            onClick={reduceItem}
                                        >
                                            <MinusIcon
                                                className="flex-shrink-0 h-6 w-6 text-white"
                                            />
                                        </button>
                                        <p className={"text-xl font-bold"}>
                                            {cart.getCartItem(product._id,selectedSize.name).quantity}
                                        </p>
                                        <button
                                            className={"bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
                                            onClick={addItem}
                                        >
                                            <PlusIcon
                                                className="flex-shrink-0 h-6 w-6 text-white"
                                            />
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div
                        className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        {product.highlights.length > 0 && product.highlights[0].trim() !== "" &&
                            <Highlights highlights={product.highlights}/>}

                        {product.details !== "" && <section aria-labelledby="shipping-heading" className="mt-10">
                            <h2 id="shipping-heading" className="text-sm font-medium text-gray-900">
                                Details
                            </h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.details}</p>
                            </div>
                        </section>}
                    </div>

                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Reviews */}
                        <Reviews reviews={reviews}/>

                    </div>
                </div>
                {/* Also Purchased */}
                <AlsoPurchased products={products}/>
            </main>
        </div>
    )
}
