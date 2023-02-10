import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Maindiv = styled("div")(() => ({
  flexWrap: "wrap",
  padding: "80px 100px",
  color: "white",
  display: "flex",
  "& h1": {
    fontSize: "52px",
    color: "white",
  },
  ["@media (max-width:780px)"]: {
    padding: "10px 50px",
  },
}));

const Statsdiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  flex: "auto",
  "& .items": {
    display: "flex",
    width: "50%",
    justifyContent: "center",
    marginTop: "35px",
  },
  "& .numbers": {
    "& h1": {
      margin: "0px",
    },
  },
  ["@media (max-width:780px)"]: {
    flexDirection: "column",
    "& .items": {
      width: "100%",
    },
  },
});

const style = {
  display: "flex",
  justifyContent: "center",
};

const MyButton = styled(Button)({
  color: "white",
  textTransform: "none",
});

const MyButtondiv = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export default function Home() {
  return (
    <>
      <Maindiv>
        <h1>The World’s Fastest Growing Crypto App</h1>
        <Statsdiv>
          <div className="items">
            <div className="numbers">
              <h1>100+</h1>
              <div style={style}>
                <h3>Exchanges</h3>
              </div>
              <MyButtondiv>
                <Link href="exchanges">
                  <MyButton variant="outlined" disableRipple>
                    See All
                  </MyButton>
                </Link>
              </MyButtondiv>
            </div>
          </div>
          <div className="items">
            <div className="numbers">
              <h1>1000+</h1>
              <div>
                <h3>Crypto Currencies</h3>
              </div>
              <MyButtondiv>
                <Link href="coins">
                  <MyButton variant="outlined" disableRipple>
                    See All
                  </MyButton>
                </Link>
              </MyButtondiv>
            </div>
          </div>
        </Statsdiv>
      </Maindiv>
    </>
  );
}
