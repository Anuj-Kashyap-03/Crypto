import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const ExchangeCarddiv = styled("div")({
  margin:"auto",
  width: "100%",
  flexDirection: "column",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  padding: "10px 20px",
  backgroundColor: "rgba(17, 153, 250, 0.05)",
  "& .logo_symbol": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height:"100px",
    "& span": {
      fontSize: "25px",
      fontWeight: "600",
      letterSpacing: "1px",
    },
  },
  "& span": {
    color: "white",
  },
  "& .name": {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    paddingLeft:"25px",
    alignItems: "center",
  },
});

export default function ExchangeCard({ item }) {
  return (
    <ExchangeCarddiv>
      <div className="logo_symbol">
        <Image alt="" src={item.image} width="50" height="50" />
        <div className="name">
          <span>{item.name}</span>
        </div>
      </div>
    </ExchangeCarddiv>
  );
}
