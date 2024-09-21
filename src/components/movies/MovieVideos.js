import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbAPI } from "../../config";

export default function MovieVideos() {
  const { movieId } = useParams();
  const [videos, setVideos] = useState([]);

  const getDataVideos = useRef();
  getDataVideos.current = async () => {
    try {
      const response = await axios.get(tmdbAPI.getMovieVideos(movieId));
      if (response?.data.results) {
        setVideos(await response?.data.results);
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
    getDataVideos.current();
  }, []);

  return (
    <div
      className={`${
        videos.length > 0 ? "pb-10 text-white video-list page-container" : ""
      }`}
    >
      <h2
        className={`${
          videos.length > 0
            ? "mb-10 text-3xl font-bold text-white capitalize"
            : ""
        }`}
      >
        {videos.length > 0 ? " Trailler" : ""}
      </h2>
      <div className="">
        {videos.slice(0, 3).map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col flex-wrap justify-between w-fullflex"
            >
              <h3 className="inline-block p-3 mb-5 text-xl font-medium text-primary">
                {item.name}
              </h3>
              <div className="w-full h-full mt-auto aspect-video">
                <iframe
                  width="1280"
                  height="720"
                  src={tmdbAPI.getVideosYoutube(item.key)}
                  title={`${item.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
