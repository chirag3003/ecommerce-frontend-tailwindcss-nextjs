import React from 'react'
import AuthProtect from "components/AuthProtect";
import ShoppingCartPage from "components/ShoppingCart"
import BasicLayout from "components/layouts/Basic"
import Head from 'next/head'


function Cart() {
    return (
        <AuthProtect>
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
        </AuthProtect>
    )
}

export default Cart