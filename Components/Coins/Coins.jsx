import React, { useEffect, useState } from "react";
import MyTable from "./Table";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
import { Button, CircularProgress } from "@mui/material";
import TopCoinsCarosule from "../Others/Populercoins/TopCoins";

const Coinsdiv = styled("div")({
  marginTop: "30px",
  padding: "0 3.5%",
});

const Paginationdiv = styled("div")({
  color: "white",
  display: "flex",
  width: "100%",
  marginTop: "30px",
  justifyContent: "flex-end",
  padding: "15px 5px",
  "& button,svg,div": {
    color: "white",
  },
});

const Loaderdiv = styled("div")({
  display: "flex",
  height: "100px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
});

const Tableheadingdiv = styled("div")({
  "& h1": {
    color: "white",
  },
});

export default function Coins() {
  const [page, setpage] = useState(1);
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(true);
  const [change_toggle,setchange_toggle]=useState(true)

  const Page_is_changed = (event, value) => {
    // console.log(value);
    setpage(value);
  };

  useEffect(() => {
    const request_data = async () => {
      seterror(false);
      setloading(true);
      try {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`;
        const data = await axios.get(url);
        // console.log(data.data);
        setdata(data.data);
        setloading(false);
      } catch (error) {
        // console.log(error);
        seterror(true);
        return false;
      }
    };
    request_data();
  }, [page,change_toggle]);

  return (
    <>
      <Coinsdiv>
        {loading && !error && (
          <Loaderdiv>
            <CircularProgress />
          </Loaderdiv>
        )}
        {error && (
          <div
            style={{
              width: "100%",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
              flexDirection: "column",
            }}
          >
            <span style={{ padding: "5px" }}>Unable to fetch data</span>
            <span style={{ padding: "5px", color: "white" }}>
              Please Check your Internet Connection
            </span>
            <span style={{ padding: "5px", color: "white" }}>
              Or try after some time
            </span>
            <Button onClick={()=>setchange_toggle(!change_toggle)}>Retry</Button>
          </div>
        )}

        {!loading && (
          <Tableheadingdiv>
            <h1>Today{`'`}s Cryptocurrency Prices</h1>
            <MyTable data={data} page={page} />
          </Tableheadingdiv>
        )}
        <Paginationdiv style={{ display: loading ? "none" : "flex" }}>
          <div>
            <Stack spacing={2}>
              <Pagination
                count={36}
                siblingCount={1}
                boundaryCount={1}
                onChange={Page_is_changed}
                color="primary"
                size={"small"}
              />
            </Stack>
          </div>
        </Paginationdiv>
      </Coinsdiv>
    </>
  );
}
