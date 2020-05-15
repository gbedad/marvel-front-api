import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComics from "../components/CardComics";
import logo from "../assets/logoReact.svg";
import ComicSearch from "./comicSearch";
import SearchComic from "../components/searchComic";
const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-app.herokuapp.com/comics",
          {
            headers: { offset: page * 100 },
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page]);
  const pageNum = [];
  for (let i = 1; i <= Math.round(data.total / 100); i++) {
    pageNum.push(i);
  }

  return isLoading ? (
    <img src={logo} className="App-logo" alt="logo" />
  ) : (
    <div>
      <div className="page">
        {pageNum.map((i, index) => {
          return (
            <button
              key="index"
              onClick={() => {
                setPage(index + 1);
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
      <SearchComic />
      <CardComics comics={data.results} />
    </div>
  );
};

export default Comics;
