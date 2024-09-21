import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbAPI, backgroundNone } from "../../config";
import MovieSimilar from "../movies/MovieSimilar";
import MovieVideos from "../movies/MovieVideos";
import Casts from "../casts/Casts";

export default function MovieDetailPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  const getData = useRef();
  getData.current = async () => {
    try {
      const response = await axios.get(tmdbAPI.getMovieDetail(movieId));
      console.log(response);
      if (response) {
        setMovies(await response?.data);
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
      <div className="w-full h-[600px] banner-wrap">
        <div
          style={{
            backgroundImage: movies.backdrop_path
              ? `url(${tmdbAPI.getImageOriginal(movies.backdrop_path)}`
              : `url(${backgroundNone})`,
            width: "100%",
            height: "100%",
          }}
          className="w-full h-full bg-no-repeat bg-cover border-modal"
        ></div>
      </div>
      <div className="img-detail max-w-[800px] h-[400px] w-full mx-auto -translate-y-2/4 mb-10 ">
        <img
          src={
            movies.poster_path
              ? tmdbAPI.getImageOriginal(movies.poster_path)
              : ""
          }
          alt=""
          className="object-contain h-full mb-5 translate-x-full border-2 border-white border-solid rounded-lg item-card__detail"
        />
        <h1 className="w-full mx-auto mb-5 text-4xl font-bold text-center text-white ">
          {movies && movies?.original_title}
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-5 mb-5 p-[5px]">
          {movies &&
            movies?.genres &&
            movies?.genres.length > 0 &&
            movies?.genres.map((item) => {
              return (
                <span
                  key={item.id}
                  className="px-6 py-[6px] text-xs font-medium border-2 border-solid rounded-lg text-primary border-primary"
                >
                  {item.name}
                </span>
              );
            })}
        </div>
        <div className="p-5 mb-10 text-justify text-white ">
          <>{movies.overview}</>
        </div>
      </div>
      <div className="mb-10 cast page-container">
        <Casts></Casts>
      </div>
      <div className="mb-10">
        <MovieVideos></MovieVideos>
      </div>
      <div>
        <MovieSimilar></MovieSimilar>
      </div>
    </>
  );
}
