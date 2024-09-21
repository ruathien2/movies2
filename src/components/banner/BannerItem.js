import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
import Button from "../button/Button";

export default function BannerItem({ item }) {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg ">
      <div className="absolute inset-0 border-modal "></div>
      <img
        className="object-cover object-top w-full h-full rounded-lg"
        src={tmdbAPI.getImageOriginal(item && item.backdrop_path)}
        alt="Avengers Banner"
      />
      <div className="absolute flex flex-col w-full text-white description bottom-5 left-5">
        <span className="flex mb-5 text-3xl font-bold ">
          {item && item.title}
        </span>
        <span className="mb-5 ">
          Premiere Date: {item && item.release_date}
        </span>

        <div className="flex flex-row items-center mb-8 gap-x-3">
          <span className=" border-[1px] border-solid px-4 py-1 rounded-lg cursor-pointer">
            Advanture
          </span>
          <span className=" border-[1px] border-solid px-4 py-1 rounded-lg cursor-pointer">
            Action
          </span>
          <span className=" border-[1px] border-solid px-4 py-1 rounded-lg cursor-pointer">
            Hero
          </span>
        </div>
        <div className="left-0 bottom-5">
          <Button
            className={"rounded-lg"}
            onClick={() => navigate(`/movie/${item.id}`)}
          >
            Watch Now
          </Button>
        </div>
      </div>
    </div>
  );
}
