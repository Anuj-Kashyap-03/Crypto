import { Html, Head, Main, NextScript } from "next/document";
import TopCoinsCarosule from "../Components/Others/Populercoins/TopCoins";
import styled from "@emotion/styled";
import Script from "next/script";
import { useEffect } from "react";
import Ad from "../Components/Ads/Ad";

const TopCarsolulediv = styled("div")({
  marginTop: "150px",
  padding: "0 3.5%",
  ["@media (max-width:780px)"]: {
    marginTop: "100px",
  },
});

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          href="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          type="image/x-icon"
        ></link>
      </Head>
      <body>
      
      <Ad/>
        <TopCarsolulediv>
          <TopCoinsCarosule />
        </TopCarsolulediv>
        
      <Ad/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
