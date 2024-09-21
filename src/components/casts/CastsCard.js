import React from "react";

export default function CastsCard({ item }) {
  return (
    <div className=" flex flex-col relative movie-card  p-3 rounded-lg h-full border-solid border-[1px] bg-slate-600  border-gray-400 select-none">
      <img
        className=" w-full h-[250px] object-cover mb-5 rounded-lg img-banner"
        src={`${
          item.profile_path
            ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
            : "https://th.bing.com/th/id/OIP.kxT5HIWQVJKRtE1tU_mpDwHaHa?rs=1&pid=ImgDetMain"
        }`}
        alt="Avengers Banner"
      />
      <div className="flex flex-col flex-1 ">
        <h3 className="mb-3 text-xl font-bold text-white">
          {item && item.name}
        </h3>
        <div className="flex flex-col mb-8 text-sm text-white gap-y-2">
          <div className="flex gap-x-2">
            <span className="font-medium">Character: </span>
            <span className="text-red"> {item && item.character}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
