import {QuestionMarkCircleIcon} from '@heroicons/react/solid'
import ProductCard2 from 'components/ProductCard2'
import CartProductCart from './CartProductCard'
import {useContext, useEffect, useState} from "react";
import Cart from "helpers/Cart";
import Axios from "helpers/Axios";


export default function ShoppingCart() {
    const cart = useContext(Cart)
    const [cartProducts, setCartProducts] = useState([])
    const [cartAmount,setCartAmount] = useState(0)

    useEffect(() => {
        Axios.post("/products/cartData", cart.cartItems).then(res => {

            if(res.data == null) res.data = []
            if(cart.cartItems == null ) res.data = []
            if( res.data.length !== cart.cartItems.length) {
                if(res.data)
                cart.setCart(res.data.map(data => {
                    return {
                        id: data.product._id,
                        size: data.size,
                        quantity: data.quantity
                    }
                }))
                else cart.setCart([])
            }
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
        <div className="bg-white">
            <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
                            {cartProducts.map(({product,size,stock,quantity}, productIdx) => (
                                <CartProductCart key={product.id} product={product} size={size} quantity={quantity} stock={stock} remove={cart.removeItem} setQuantity={cart.setCartItemQuantity} productIdx={productIdx}/>
                            ))}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                    >
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                            Order summary
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">Subtotal</dt>
                                <dd className="text-sm font-medium text-gray-900">₹ {cartAmount}</dd>
                            </div>
                            {/*<div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Shipping estimate</span>
                                    <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Learn more about how shipping is calculated</span>
                                        <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true"/>
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                            </div>*/}
                            <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                                <dt className="text-base font-medium text-gray-900">Order total</dt>
                                <dd className="text-base font-medium text-gray-900">₹ {cartAmount}</dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <a
                                href={"/account/checkout"}
                                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                                Checkout
                            </a>
                        </div>
                    </section>
                </div>

                {/* Related products */}
                {/*<section aria-labelledby="related-heading" className="mt-24">*/}
                {/*    <h2 id="related-heading" className="text-lg font-medium text-gray-900">*/}
                {/*        You may also like&hellip;*/}
                {/*    </h2>*/}

                {/*    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">*/}
                {/*        {relatedProducts.map((product) => (*/}
                {/*            <ProductCard2 key={product.id} product={product} />*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</section>*/}
            </main>
        </div>
    )
}
