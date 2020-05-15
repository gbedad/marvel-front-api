import React, { useState, useEffect } from "react";
import axios from "axios";

import CardCharacters from "../components/CardCharacters";
import SearchCharacter from "../components/searchCharacters";
import logo from "../assets/logoReact.svg";
const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  console.log(data);
  console.log(page);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-app.herokuapp.com/",
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
  console.log(pageNum);
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
                setPage(i - 1);
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
      <SearchCharacter />
      <CardCharacters character={data.results} />
    </div>
  );
};

export default Characters;
