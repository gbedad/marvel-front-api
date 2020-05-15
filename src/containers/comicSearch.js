import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import CardComics from "../components/CardComics";

const ComicSearch = () => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(0);
  const location = useLocation();
  const { search } = location.state;
  console.log(data);

  const pageNum = [];
  for (let i = 1; i <= Math.round(data.total / 100); i++) {
    pageNum.push(i);
  }

  return (
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
      <CardComics comics={search} />
    </div>
  );
};

export default ComicSearch;
