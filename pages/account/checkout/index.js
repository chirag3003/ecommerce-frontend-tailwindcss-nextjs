import React, {useEffect} from 'react'
import AuthProtect from "components/AuthProtect";
import CheckoutPage from "components/CheckoutPage"
import BasicLayout from "components/layouts/Basic"
import Head from 'next/head'
import setScript from "../../../helpers/setScript";


function Cart() {
    useEffect(() => {
        setScript("https://checkout.razorpay.com/v1/checkout.js")
    },[])
    return (
        <AuthProtect>
            <div>
                <Head>
                    <title>Checkout</title>
                    <meta name="description" content="Cart" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <BasicLayout>
                    <CheckoutPage />
                </BasicLayout>


            </div>
        </AuthProtect>
    )
}

export default Cart