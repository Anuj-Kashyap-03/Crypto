import styled from "@emotion/styled";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ExchangeCard from "../Others/ExchngeCard/ExchangeCard";

const ExchangesListdiv = styled("div")({
  padding: "0 2%",
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "1400px",
  margin: "auto",
  "& .exchange": {
    padding: "15px",
    width: "33.3%",
  },

  ["@media (max-width:900px)"]: {
    "& .exchange": {
      padding: "15px",
      width: "50%",
    },
  },
  ["@media (max-width:600px)"]: {
    "& .exchange": {
      padding: "15px",
      width: "100%",
    },
  },
});

export default function Exchanges() {
  const [data, setdata] = useState([]);



  useEffect(() => {
    const request_data_ = async () => {
      try {
        const url = `https://api.coingecko.com/api/v3/exchanges`;
        const data = await axios.get(url);
        setdata(data.data);
      } catch (error) {
        // console.log(error);
      }
    };
  
    request_data_();
  }, []);

  return (
    <ExchangesListdiv>
      {data && data.map((item, index) => {
        return (
          <div className="exchange" key={"jkvnkj" + index}>
            <Link href={item.url} target="blank">
              <ExchangeCard item={item} />
            </Link>
          </div>
        );
      })}
    </ExchangesListdiv>
  );
}
