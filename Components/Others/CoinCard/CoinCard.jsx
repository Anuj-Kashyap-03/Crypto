import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CoinCarddiv = styled("div")({
  display: "flex",
  width: "350px",
  flexDirection: "column",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  padding: "10px 20px",
  backgroundColor: "rgba(17, 153, 250, 0.05)",
  "& .logo_symbol": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
});

const Informationdiv = styled("div")({
  display: "flex",
  flex: 1,
  paddingTop: "15px",
  flexDirection: "column",
  "& .price_change": {
    display: "flex",
    justifyContent: "space-between",
    "& div": {
      display: "flex",
      width: "50%",
      justifyContent: "flex-start",
    },
  },
  "& .price span": {
    fontSize: "18px",
  },
  "& .change span": {
    fontSize: "18px",
    letterSpacing: "4px",
  },
});

const DOWNIcon = styled(ArrowDownwardIcon)({
  color: "red",
  marginRight: "6px",
});

const UPIcon = styled(ArrowUpwardIcon)({
  color: "green",
  marginRight: "6px",
});

export default function CoinCard({ item }) {
  return (
    <CoinCarddiv>
      <div className="logo_symbol">
        <Image alt="" src={item.image} width="50" height="50" />
        <div className="name">
          <span>{item.name}</span>
        </div>
      </div>
      <Informationdiv className="info">
        <div className="price_change">
          <div className="price">
            <span>$ {item.current_price}</span>
          </div>
          <div className="change">
            {item.price_change_percentage_24h && (
              <>
                {item.price_change_percentage_24h >= 0 ? (
                  <UPIcon />
                ) : (
                  <DOWNIcon />
                )}
                <span
                  style={{
                    color:
                      item.price_change_percentage_24h >= 0 ? "green" : "red",
                  }}
                >
                  {item.price_change_percentage_24h.toFixed(2)} %
                </span>
              </>
            )}
          </div>
        </div>
      </Informationdiv>
    </CoinCarddiv>
  );
}
