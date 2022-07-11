
import CheckoutProductCard from "./CheckoutProductCard";
import {useContext, useEffect, useState} from "react";
import Cart from "../../helpers/Cart";
import Axios from "../../helpers/Axios";
import Addresses from "../Addresses";
import Auth from "../../helpers/Auth";
import toast from "react-hot-toast";
import {useRouter} from "next/router"

export default function CheckoutPage() {
    const router = useRouter()
    const auth = useContext(Auth)
    const cart = useContext(Cart)
    const [cartProducts, setCartProducts] = useState([])
    const [cartAmount,setCartAmount] = useState(0)
    const [selectedAddress,setSelectedAddress] = useState("")

    function successfulPaymentHandler(orderID=""){
        router.replace("/account/orders/"+orderID)
    }
    function checkout(){
        let data = {
            address:selectedAddress,
            products:cartProducts.map((product) => {
                return {
                    product:product.product._id,
                    quantity:product.quantity,
                    size:product.size
                }
            })
        }
        auth.Axios.post("/order",data).then(res => {
            var options = {
                "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
                "name": auth.user.name,
                // "image": "https://example.com/your_logo",
                "handler":() => successfulPaymentHandler(res.data.orderID),
                "order_id":res.data.transactionID,
                "prefill": {
                    "name": auth.user.name,
                    "email": auth.user.email,
                },
                "theme": {
                    "color": "#4338CA"
                }
            };
            let rzp = new window.Razorpay(options)
            rzp.open()
        }).catch(err => {
            console.error(err)
            toast.error("Error creating order. Please Try again later!")
        })
    }


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
                                <Addresses title={"Shipping Information"} select={true} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress}/>
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
                                        onClick={checkout}
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
