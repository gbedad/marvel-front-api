import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import CardCharacters from "../components/CardCharacters";
import logo from "../assets/logoReact.svg";
const CharacterSearch = () => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(0);
  const location = useLocation();
  const { search } = location.state;

  const pageNum = [];
  for (let i = 1; i <= Math.round(data.total / 100); i++) {
    pageNum.push(i);
  }
  console.log(pageNum);
  return (
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

      <CardCharacters character={search} />
    </div>
  );
};

export default CharacterSearch;
