import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const timeframes = [
  [1, "24H"],
  [7, "7D"],
  [30, "1M"],
  [90, "3M"],
  [180, "6M"],
  [365, "1Y"],
  ["max", "Max"],
];

export default function PositionedMenu({ Setinterval }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [timeframe, settimeframe] = useState("24H");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOnItem = (e, item) => {
    Setinterval(item[0]);
    settimeframe(item[1]);
    setAnchorEl(null);
    console.log(item);
  };

  return (
    <div >
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {timeframe}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {timeframes.map((item, index) => {
          return (
            <MenuItem
              key={"kd" + index}
              onClick={(e) => {
                handleClickOnItem(e, item);
              }}
            >
              {item[1]}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
