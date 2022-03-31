import Head from 'next/head'
import BasicLayout from "components/layouts/Basic"
import ProductPage from "components/ProductPage"


export default function Home() {
    return (
        <div>
            <Head>
                <title>Prod</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BasicLayout>
                <main>
                    <ProductPage />
                </main>

            </BasicLayout>


        </div>
    )
}