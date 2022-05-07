import Head from 'next/head'
import '../styles/globals.css'
import '../components/Layout.js'
import Navbar from "../components/Navbar"
import { Layout } from '../components/Layout.js'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Head>
        <title>NFT Space</title>
      </Head>
      <Navbar />
      <div className="flex-1 bg-gray-200 w-full">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp
