import Head from "next/head";
import { useRouter } from "next/router";
import Coin from "../../Components/Coin/Coin";
import Navbar from "../../Components/Others/Navbar/Navbar";
import Ad from "../../Components/Ads/Ad";

export default function CoinId() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Navbar />
      <Head>
        <title>{id && id.toUpperCase()}</title>
      </Head>

      <Coin id={id} />

      <Ad />
    </div>
  );
}
