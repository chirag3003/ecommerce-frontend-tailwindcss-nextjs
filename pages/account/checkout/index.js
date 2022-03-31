import React from 'react'
import CheckoutPage from "components/CheckoutPage"
import BasicLayout from "components/layouts/Basic"
import Head from 'next/head'


function Cart() {
    return (
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
    )
}

export default Cart