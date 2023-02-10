import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Image from "next/image";
import Link from "next/link";

const tableheader = [
  ["#", "Rank is the position of a cryptocurrency by Market Cap"],
  ["NAME", ""],
  [
    "PRICE",
    "Price is the cost of a single coin or token for a cryptocurrency. It is influenced by supply & demand, availability, and many other factors. ",
  ],
  [
    "24H CHANGE",
    "24H Change shows the percentage price difference in the market between now and 24 hours ago",
  ],

  [
    "24h VOLUME",
    "24h Volume shows the total volume amount traded in last 24 hours",
  ],
  [
    "MARKET CAP",
    "Market Cap is a cryptocurrency's total value and is calculated by multiplying the price and Circulating Supply.",
  ],
];

const MyTableCell = styled(TableCell)({
  backgroundColor: "rgb(9 29 58)",
  padding: "10px 10px",
  "& span": {
    fontWeight: "550",
    color: "white",
    fontSize: "14px",
    paddingRight: "6px",
  },
  "& svg": {
    fontSize: "17px",
  },
  "& .tableheadercell": {
    display: "flex",
    alignItems: "center",
  },
});

const MyTableHead = styled(TableHead)({});

const MyTableRow = styled(TableRow)({
  backgroundColor: "#0B1426",
  borderBottom: "1px solid red",
  "& .col-0": {
    width: "10%",
  },
  "& .col-1": {
    width: "25%",
  },
  "& .col-2": {
    width: "15%",
  },
});

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11,
    maxWidth: "200px",
    lineHeight: "15px",
    padding: "12px",
    [`& .${tooltipClasses.arrow}`]: {
      color: "white",
    },
  },
}));

// Styles for table body

const RankColumnBodyCell = styled("div")({
  display: "flex",
  justifyContent: "center",
  "& span": {
    display: "flex",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
  },
});

const NameColumnBodyCell = styled("div")({
  padding: "5px ,5px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& a": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  "& .name__symbol": {
    display: "flex",
    margin: "5px 10px",
    flexDirection: "column",
  },
  "& .span1": {
    display: "flex",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  "& .span2": {
    textTransform: "uppercase",
    display: "flex",
    color: "#A0A9BE",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
});

const PriceColumnBodyCell = styled("div")({
  display: "flex",
  "& span": {
    display: "flex",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
});

const _24H_ColumnBodyCell = styled("div")({
  display: "flex",
  "& span": {
    display: "flex",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
});

const MarketcapColumnBodyCell = styled("div")({
  borderBootom: "none",
  display: "flex",
  "& span": {
    display: "flex",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
});

const VolumeColumnBodyCell = styled("div")({
  display: "flex",
  "& span": {
    display: "flex",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
});

export default function MyTable({ data, page }) {
  return (
    <TableContainer component={Paper} className="s_b_c_m">
      {data && (
        <Table aria-label="simple table">
          <MyTableHead>
            <MyTableRow>
              {tableheader.map((item, index) => (
                <MyTableCell
                  key={"nckd" + index}
                  align="center"
                  className={"col-" + index}
                >
                  <div
                    className="tableheadercell"
                    style={{ justifyContent: index === 0 ? "center" : "start" }}
                  >
                    <span className="name_span">{item[0]}</span>
                    {index === 1 ? (
                      ""
                    ) : (
                      <LightTooltip title={item[1]} arrow>
                        <InfoOutlinedIcon color="primary" />
                      </LightTooltip>
                    )}
                  </div>
                </MyTableCell>
              ))}
            </MyTableRow>
          </MyTableHead>
          <TableBody style={{ backgroundColor: "rgb(9 29 58)" }}>
            {data.map((item, index) => (
              <TableRow
                key={"kdfv" + index}
                id={"nck" + index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  "& td,th": {
                    borderBottom: "none",
                  },
                  padding: 0,
                }}
                style={{
                  padding: "0px",
                  backgroundColor: "rgb(9 29 58)",
                }}
              >
                <MyTableCell
                  component="th"
                  scope="row"
                  align="center"
                  className="col-0"
                >
                  <RankColumnBodyCell className="rank">
                    <span className="rank">{50 * (page - 1) + index + 1}</span>
                  </RankColumnBodyCell>
                </MyTableCell>
                <MyTableCell align="center" className="col-1">
                  <NameColumnBodyCell className="name">
                    <Link
                      href={"coin/" + item.id}
                      style={{ padding: "0px 10px" }}
                    >
                      <div className="image">
                        <Image
                          alt=""
                          src={item.image}
                          width="35"
                          height="35"
                        ></Image>
                      </div>
                      <div className="name__symbol">
                        <div className="span1">{item.name}</div>
                        <div className="span2">{item.symbol}</div>
                      </div>
                    </Link>
                  </NameColumnBodyCell>
                </MyTableCell>
                <MyTableCell align="center" className="col-2">
                  <PriceColumnBodyCell className="price">
                    <span>${item.current_price}</span>
                  </PriceColumnBodyCell>
                </MyTableCell>
                <MyTableCell align="center" className="col-3">
                  <_24H_ColumnBodyCell>
                    <span
                      style={{
                        color:
                          item.price_change_percentage_24h >= 0
                            ? "green"
                            : "red",
                      }}
                    >
                      {item.price_change_percentage_24h >= 0 ? "+" : ""}
                      {item.price_change_percentage_24h &&
                        item.price_change_percentage_24h.toFixed(2)}
                      %
                    </span>
                  </_24H_ColumnBodyCell>
                </MyTableCell>
                <MyTableCell align="center" className="col-4">
                  <VolumeColumnBodyCell>
                    <span>
                      $
                      {item.total_volume &&
                        (item.total_volume / 1000000000).toFixed(2)}
                      B
                    </span>
                  </VolumeColumnBodyCell>
                </MyTableCell>
                <MyTableCell align="center" className="col-6">
                  <MarketcapColumnBodyCell>
                    <span>
                      $
                      {(
                        item.market_cap && item.market_cap / 1000000000
                      ).toFixed(2)}
                      B
                    </span>
                  </MarketcapColumnBodyCell>
                </MyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}{" "}
    </TableContainer>
  );
}
