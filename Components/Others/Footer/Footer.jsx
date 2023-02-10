import React from "react";
import styled from "@emotion/styled";

const Footerdiv = styled("div")({
  width: "100vw",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  marginTop:"80px",
  alignItems: "center",
  "& h3": {
    color: "grey",
  },
});

export default function Footer() {
  return (
    <Footerdiv className="s_b_c_m">
      <h3>Crypto.com</h3>
    </Footerdiv>
  );
}
