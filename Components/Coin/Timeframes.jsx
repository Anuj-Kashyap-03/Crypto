import * as React from "react";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styled from "@emotion/styled";

const timeframes = [
  [1, "24H"],
  [7, "7D"],
  [30, "1M"],
  [90, "3M"],
  [180, "6M"],
  [365,"1Y"],
  ["max","Max"]
];

const MyToggleButton = styled(ToggleButton)({
  color: "white",
  border: "none",
});

const Buttondiv=styled("div")({

})

export default function ToggleButtonNotEmpty({ Setinterval }) {
  const [alignment, setAlignment] = React.useState(1);

  const handleAlignment = (event, newAlignment) => {
    // console.log(newAlignment);
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      Setinterval(newAlignment);
    }
  };

  return (
    <Stack direction="row" spacing={4} >
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        {timeframes.map((item, index) => {
          return (
            <MyToggleButton
              key={"kvnk" + index}
              value={item[0]}
              aria-label="left aligned"
            >
              {item[1]}
            </MyToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Stack>
  );
}
