import Head from 'next/head'
import Image from 'next/image'
import Home from '../Components/Home/Home'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Others/Navbar/Navbar'


export default function Index() {
  return (
    <>
      <Head>
        <title>Crypto.com</title>
      </Head>
      <Navbar activate="home_link" />
      <Home></Home>
    </>
  )
}
