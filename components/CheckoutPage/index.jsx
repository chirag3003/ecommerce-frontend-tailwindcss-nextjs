
import CheckoutProductCard from "./CheckoutProductCard";
import {useContext, useEffect, useState} from "react";
import Cart from "../../helpers/Cart";
import Axios from "../../helpers/Axios";
import Addresses from "../Addresses";

const products = [
    {
        id: 1,
        title: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Black',
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 1,
        title: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Black',
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
]
export default function CheckoutPage() {

    const cart = useContext(Cart)
    const [cartProducts, setCartProducts] = useState([])
    const [cartAmount,setCartAmount] = useState(0)

    function checkout(){}


    useEffect(() => {
        Axios.post("/products/cartData", cart.cartItems).then(res => {
            if(!res.data){
                return setCartProducts([])
            }
            setCartProducts(res.data)
        }).catch(err => console.error(err))
    }, [cart.cartItems])

    useEffect(() => {
        let amount = 0 ;
        cartProducts.forEach((product) => {
            amount += (product.product.price * product.quantity)
        })
        setCartAmount(amount)
    } , [cartProducts])

    return (
        <div className="bg-gray-50">

            <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    <h1 className="sr-only">Checkout</h1>

                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                        <div>
                            <div className="border-gray-200">
                                <Addresses title={"Shipping Information"}/>
                                {/*<div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="first-name"
                                                name="first-name"
                                                autoComplete="given-name"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="last-name"
                                                name="last-name"
                                                autoComplete="family-name"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                            Company
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                autoComplete="street-address"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                            Apartment, suite, etc.
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="apartment"
                                                id="apartment"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Country
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                            State / Province
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="postal-code"
                                               className="block text-sm font-medium text-gray-700">
                                            Postal code
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>

                        {/* Order summary */}
                        <div className="mt-10 lg:mt-0">
                            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="sr-only">Items in your cart</h3>
                                <ul role="list" className="divide-y divide-gray-200">
                                    {cartProducts.map(({product,size,quantity}, index) => (
                                        <CheckoutProductCard key={index} product={product} size={size} quantity={quantity} remove={cart.removeItem} setQuantity={cart.setCartItemQuantity} index={index} />
                                    ))}
                                </ul>
                                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Subtotal</dt>
                                        <dd className="text-sm font-medium text-gray-900">₹ {cartAmount}</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                        <dt className="text-base font-medium">Total</dt>
                                        <dd className="text-base font-medium text-gray-900">₹ {cartAmount}</dd>
                                    </div>
                                </dl>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                    >
                                        Confirm order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
