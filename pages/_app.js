import Footer from "../Components/Others/Footer/Footer";
import styled from "@emotion/styled";
import Ad from "../Components/Ads/Ad";
import TopCoinsCarosule from "../Components/Others/Populercoins/TopCoins";
import "../styles/globals.css";
import LoadScript from "../Components/Ads/LoadScript";

const TopCarsolulediv = styled("div")({
  marginTop: "150px",
  padding: "0 3.5%",
  ["@media (max-width:780px)"]: {
    marginTop: "100px",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>

      <TopCarsolulediv>
        <TopCoinsCarosule />
      </TopCarsolulediv>
      
      <Component {...pageProps} />

      <Footer />
      
      <LoadScript />
      
    </>
  );
}

export default MyApp;
