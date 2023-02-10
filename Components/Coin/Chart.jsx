import { InfoOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Chart({ id, interval }) {
  const [Chartheight, setChartheight] = useState(null);
  const [Chartdata, setChartdata] = useState(null);
  const [maximum_price_, setmaximum_price_] = useState(null);
  const [minimum_price_, setmimimum_price_] = useState(null);
  const [Lowesttime_, setLowesttime_] = useState(null);
  const [Maximum_time_, setMaximum_time_] = useState(null);

  const handleWindowresize = () => {
    const a = window.outerWidth;
    setChartheight(a - (a * 10) / 100);
    // console.log(a - (8 / 100) * a);
  };

  useEffect(() => {
    const get_data = async () => {
      const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${interval}`;
      const data = await axios.get(url);
      const Prices = data.data.prices;
      // console.log(Prices);
      let maximum_price = Prices[0][1];
      let minimum_price = Prices[0][1];
      let maximum_time = Prices[0][0];
      let minimum_time = Prices[0][0];

      const chart_data = [];
      Prices.map((item) => {
        const time = new Date(item[0]);
        const date = time.getDate();
        const month = time.getMonth();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const chart_item = {
          price: item[1].toFixed(2),
          time: `${date + " " + months[month] + " " + hour + ":" + minutes}`,
        };
        chart_data.push(chart_item);
        if (item[1] > maximum_price) {
          maximum_price = item[1];
        }
        if (item[1] < minimum_price) {
          minimum_price = item[1];
        }
        if (item[0] > maximum_time) {
          maximum_time = item[1];
        }
        if (item[0] < minimum_time) {
          minimum_time = item[1];
        }
      });
      // console.log(chart_data);
      setChartdata(chart_data);
      setmaximum_price_(maximum_price);
      setmimimum_price_(minimum_price);
      setLowesttime_(minimum_time);
      setMaximum_time_(maximum_time);
    };
    get_data();
  }, [id, interval]);

  useEffect(() => {
    handleWindowresize();
    window.addEventListener("resize", handleWindowresize);
    return () => {
      window.removeEventListener("resize", handleWindowresize);
      // console.log("removed");
    };
  }, []);

  return (
    <>
      {Chartdata && (
        <AreaChart
          width={Chartheight}
          height={450}
          data={Chartdata}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis dataKey="time" tickSize={20} minTickGap={40} />
          <YAxis
            datakey="price"
            tickCount={10}
            minTickGap={10}
            domain={
               maximum_price_ > 1
                ? [Math.round(minimum_price_.toFixed(2)), Math.round(maximum_price_.toFixed(2))]
                : [minimum_price_.toFixed(6), maximum_price_.toFixed(6)]
            }
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fill="#007aff"
          />
        </AreaChart>
      )}
    </>
  );
}
