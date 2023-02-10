import React, { useEffect,  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CoinCard from "../CoinCard/CoinCard";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import axios from "axios";

export default function TopCoinsCarosule() {
  const [data, setdata] = useState([]);
  const [slidesPerView, setslidesPerView] = useState(null);

  const request_data = async () => {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`;
      const data = await axios.get(url);
      setdata(data.data);
    } catch (error) {
    }
  };


  const handleWindowresize = () => {
    // console.log("resized");
    setslidesPerView(
      (window.innerWidth - (9.5 * window.innerWidth) / 100) / 350
    );
  };

  useEffect(() => {
    request_data();
  }, []);

  useEffect(() => {
    setslidesPerView(
      (window.innerWidth - (9.5 * window.innerWidth) / 100) / 350
    );
    window.addEventListener("resize", handleWindowresize);

    return () => {
      window.removeEventListener("resize", handleWindowresize);
      // console.log("removed");
    };
  }, []);

  return (
    <>
      {slidesPerView && (
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={15}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={"vnjk" + index}>
                <Link href={"/coin/" + item.id}>
                  <CoinCard item={item} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
}
