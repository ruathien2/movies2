import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "../movies/MovieCard";
import axios from "axios";
import { tmdbAPI } from "../../config";

export default function MovieList({ type }) {
  const [movies, setMovies] = useState([]);

  const getData = async (type = "now_playing") => {
    try {
      const response = await axios.get(tmdbAPI.getMovieList(type));
      return setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-auto movies-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
