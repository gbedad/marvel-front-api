import React from "react";

const CardComics = ({ comics }) => {
  return (
    <div className="comics">
      {comics.map((comics, index) => {
        return (
          <div className="card">
            <img
              src={`${comics.thumbnail.path}/portrait_xlarge.${comics.thumbnail.extension}`}
              alt="char"
            />
            <div className="name">
              <h3>{comics.title} </h3>
            </div>

            <div className="description">
              <p>{comics.description} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardComics;
