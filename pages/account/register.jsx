import Head from 'next/head'
import BasicLayout from "components/layouts/Basic"
import AccountPage from "components/AccountPage"
import Login from "../../components/Login";




export default function RegisterPage() {
    return (
        <div>
            <Head>
                <title>Register Page</title>
                <meta name="description" content="Register Page for Ecommerce" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BasicLayout>
                <Login register={true} />
            </BasicLayout>


        </div>
    )
}
