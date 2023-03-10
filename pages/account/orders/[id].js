import Head from 'next/head'
import BasicLayout from "components/layouts/Basic"
import OrderPage from "components/OrderPage"
import AuthProtect from "components/AuthProtect";


export default function Orders() {
    return (
        <AuthProtect>
            <div>
                <Head>
                    <title>Ord</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <BasicLayout>
                    <OrderPage />
                </BasicLayout>


            </div>
        </AuthProtect>
    )
}
