import React, { useEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../movies/MovieCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { tmdbAPI } from "../../config";
import "swiper/css";

export default function MovieSimilar() {
  const { movieId } = useParams();
  const [similar, setSimilar] = useState([]);

  const getData = useRef();
  getData.current = async () => {
    try {
      const response = await axios.get(tmdbAPI.getMovieSimilar(movieId));
      if (response?.data.results) {
        setSimilar(await response?.data.results);
      } else if (
        !response?.data.results ||
        response?.data.results.length <= 0
      ) {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData.current();
  }, []);

  return (
    <>
      {similar.length > 0 ? (
        <div className="h-auto mb-10 movies-list page-container">
          <h2 className="mb-10 text-3xl font-bold text-white capitalize ">
            Movies Similar
          </h2>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {similar.length > 0 &&
              similar.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
