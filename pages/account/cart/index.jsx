import React from 'react'
import ShoppingCartPage from "components/ShoppingCart"
import BasicLayout from "components/layouts/Basic"
import Head from 'next/head'


function Cart() {
    return (
        <div>
            <Head>
                <title>Cart</title>
                <meta name="description" content="Cart" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BasicLayout>
                <ShoppingCartPage />
            </BasicLayout>


        </div>
    )
}

export default Cart