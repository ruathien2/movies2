import axios from "axios";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { tmdbAPI } from "../../config";
import BannerItem from "./BannerItem";

export default function Banner() {
  const [data, setData] = useState([]);
  const getApi = async () => {
    try {
      const response = await axios.get(tmdbAPI.getApiBanner());
      setData(response?.data.results || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <BannerItem item={item}></BannerItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}
