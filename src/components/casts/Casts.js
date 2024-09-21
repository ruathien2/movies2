import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbAPI } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import CastsCard from "../casts/CastsCard";

export default function Casts() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const getData = useRef();
  getData.current = async () => {
    try {
      const response = await axios.get(tmdbAPI.getMovieCasts(movieId));
      if (response?.data.cast) {
        setCasts(await response?.data.cast);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData.current();
  }, []);

  return (
    <div className="pb-6 border-b-2 border-solid casts-list border-primary">
      <h1 className="w-full mx-auto mb-5 text-4xl font-bold text-center text-white title-top">
        Casts
      </h1>
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {casts &&
          casts.length > 0 &&
          casts.map((item) => {
            return (
              <SwiperSlide key={item.credit_id}>
                <CastsCard item={item}></CastsCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
