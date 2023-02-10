import Footer from '../Components/Others/Footer/Footer'
import TopCoinsCarosule from "../Components/Others/Populercoins/TopCoins";
import styled from "@emotion/styled";


import '../styles/globals.css'
import Head from 'next/head';


const TopCarsolulediv = styled("div")({
  marginTop: "150px",
  padding: "0 3.5%",
  ["@media (max-width:780px)"]: {
    marginTop: "100px",
  },
});



function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="icon" href=
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        type="image/x-icon"></link>
    </Head>
    <TopCarsolulediv>
      <TopCoinsCarosule />
    </TopCarsolulediv>
    <Component {...pageProps} />

    <Footer />
  </>
}

export default MyApp
