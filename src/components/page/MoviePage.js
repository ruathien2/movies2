import React, { useEffect, useRef, useState } from "react";
import MovieCard from "../movies/MovieCard";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";

const itemsPerPage = 20;

export default function MoviePage() {
  const [nextPage, setNextPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdbAPI.getMoviePopular(nextPage));

  console.log("totalPages: ", totalPages);

  const getData = useRef();
  getData.current = async () => {
    try {
      const response = await axios.get(url);
      return setMovies(response?.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataTotalPage = useRef();
  getDataTotalPage.current = async () => {
    try {
      const response = await axios.get(tmdbAPI.getTotalPages(nextPage));
      console.log("total_pages: ", response.data.total_results);
      return setTotalPages(response.data.total_results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    console.log(filter);
    if (filter) {
      setUrl(tmdbAPI.searchMovies(filter, nextPage));
    } else {
      setUrl(tmdbAPI.getMoviePopular(nextPage));
    }
  };

  // ===========================================================================

  const pageCount = Math.ceil(totalPages / itemsPerPage);
  console.log("pageCount: ", pageCount);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setNextPage(event.selected + 1);
  };
  // ===========================================================================

  useEffect(() => {
    getData.current();
    getDataTotalPage.current();
    if (filter) {
      setUrl(tmdbAPI.searchMovies(filter, nextPage));
    } else {
      setUrl(tmdbAPI.getMoviePopular(nextPage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, nextPage]);
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [url, nextPage]);
  return (
    <div className="text-white page-container">
      <div className="flex justify-center mb-5">
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Type here to search ..."
            className="w-full px-4 rounded-l-lg outline-none rounded-b-l-lg focus:border-solid focus:border-primary focus:border-2 focus: text-primary"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <Button
          className={"rounded-r-lg rounded-b-r-lg"}
          onClick={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-10 mb-10 movies-grid">
        {movies.length > 0 &&
          movies.map((item) => {
            return <MovieCard key={item.id} item={item}></MovieCard>;
          })}
      </div>
      <div className="flex items-center justify-center mb-10 gap-x-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          }
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
}
