import Head from 'next/head'
import BasicLayout from "components/layouts/Basic"
import HomePage from "components/Home"




export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BasicLayout>
        <HomePage />
      </BasicLayout>


    </div>
  )
}
