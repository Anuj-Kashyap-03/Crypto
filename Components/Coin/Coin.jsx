import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Timeframe from "./Timeframes";
import Chart from "./Chart";
import axios from "axios";
import Timeframeformobile from "./Timeframeformobile";
import { Box } from "@mui/material";

const CoinDiv = styled("div")({
  margin: "40px 0",
  padding: "0 3.5%",
  width: "100%",
  "& .image": {},
  "& .symbol": {
    display: "flex",
    alignItems: "baseline",

    "& div": {
      display: "flex",
      marginRight: "15px",
    },
    "& h1,h3": {
      margin: "0",
      position: "relative",
      bottom: "14px",
    },
    "& h1": {
      color: "white",
      fontWeight: "600",
    },
    "& h3": {
      color: "grey",
    },
    "& img": {
      border: "2px solid white",
      borderRadius: "30px",
    },
  },
});

const Chartdiv = styled("div")({
  padding: "2%",
  backgroundColor: "rgba(17, 153, 250, 0.05)",
  marginTop: "25px",
  "& .Info": {
    display: "flex",
    alignItems: "center",
    "& div": {
      marginRight: "20px",
    },
    "& h1,h2": {
      margin: "0",
      color: "white",
      fontWeight: "600",
    },
  },
});

const Timframediv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  "& h3": {
    color: "white",
    fontWeight: "600",
  },
});

export default function Coin({ id }) {
  const [data, setdata] = useState(null);
  const [interval, setinterval] = useState(1);

  const get_interval_from_timeframes = (value) => {
    // console.log("value",value);
    setinterval(value);
  };

  useEffect(() => {
    const request_data = async () => {
      const domain = `https://api.coingecko.com/api/v3/coins/${id}?`;
      const query = `localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
      try {
        const url = domain + query;
        const data = await axios.get(url);
        setdata(data.data);
        // console.log(data.data);
      } catch (error) {
        // console.log(error);
      }
    };
    request_data();
  }, [id]);
  return (
    <>
      {data && (
        <CoinDiv>
          <div className="symbol">
            <div className="image">
              <Image
                alt=""
                width={50}
                height={50}
                src={data.image.large}
              ></Image>
            </div>
            <div className="name">
              <h1>{data.name}</h1>
            </div>
            <div>
              <h3>BTC</h3>
            </div>
          </div>
          <Chartdiv>
            <div className="Info">
              <div className="price">
                <h1>$ {data.market_data.current_price.usd} USD</h1>
              </div>
              <div className="change">
                <h2
                  style={{
                    color:
                      data.market_data.price_change_percentage_24h < 0
                        ? "red"
                        : "green",
                  }}
                >
                  {" "}
                  {data.market_data.price_change_percentage_24h &&
                    data.market_data.price_change_percentage_24h.toFixed(
                      2
                    )}{" "}
                  %
                </h2>
              </div>
              <div className="interval">
                <h2> (1D)</h2>
              </div>
            </div>
            <Timframediv>
              <div className="chartheading">
                <h3>{data.name} Price (USD)</h3>
              </div>
              <div className="buttons">
                <Box sx={{ display: { xs: "none", md: "block" }}}>
                <Timeframe Setinterval={get_interval_from_timeframes} />
                </Box>
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <Timeframeformobile
                    mobile
                    Setinterval={get_interval_from_timeframes}
                  />
                </Box>
              </div>
            </Timframediv>

            <Chart id={id} interval={interval} />
          </Chartdiv>
        </CoinDiv>
      )}
    </>
  );
}
