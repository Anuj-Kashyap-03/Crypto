import styled from "@emotion/styled"
import Head from "next/head"
import Exchanges from "../../Components/Exchanges/Exchanges"
import Navbar from '../../Components/Others/Navbar/Navbar'



const Div = styled("div")({
  marginTop: "35px",
})


export default function Exchange() {
  return (

    <Div>
      <Head>
        <title>Exchange</title>
      </Head>
      <Navbar activate="exchanges_link"/>
      <Exchanges />
    </Div>
  )
}
