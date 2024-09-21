import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

export default function MovieCard({ item }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movie/${item.id}`);
    window.location.reload(false);
  };

  return (
    <div className="flex flex-col relative movie-card  p-3 rounded-lg h-full border-solid border-[1px] bg-slate-600  border-gray-400 select-none">
      <img
        className="w-full h-[250px] object-cover rounded-lg mb-5"
        src={`https://image.tmdb.org/t/p/w500${item && item.backdrop_path}`}
        alt="Avengers Banner"
      />
      <div className="flex flex-col flex-1 ">
        <h3 className="mb-3 text-xl font-bold text-white">
          {item && item.title}
        </h3>
        <div className="flex flex-row items-center justify-between mb-8 text-sm text-white">
          <span>{item && item.release_date}</span>
          <span>Course: {item && item.vote_average}</span>
        </div>
        <Button className={"w-full rounded-lg"} onClick={handleNavigate}>
          Watch Now
        </Button>
      </div>
    </div>
  );
}

{
  /* <div
        className="-translate-y-full"
        style={{
          backgroundImage:
            "url('https://s3-eu-central-1.amazonaws.com/vodafone-featured/wp-content/uploads/2018/04/05225224/Avengers-InfinityWar_91.jpg')",
          filter: "blur(8px)",
          WebkitFilter: "blur(8px)",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div> */
}
{
  /* <div className="-translate-y-full "> */
}
