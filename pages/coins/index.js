import Head from "next/head"
import Coins from "../../Components/Coins/Coins"
import Navbar from '../../Components/Others/Navbar/Navbar'




export default function CoinsPage() {
  return (
    <div >
      <Head>
        <title>Coins</title>
      </Head>
      <Navbar activate="coins_link"/>
      <Coins />
    </div>
  )
}
