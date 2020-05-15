import React from "react";
import { useLocation } from "react-router-dom";

const CharacterComics = () => {
  const location = useLocation();

  const { characterId } = location.state;
  return (
    <div>
      <div className="comics">
        {characterId.map((comics) => {
          return (
            <div className="cardCover">
              <img
                src={`${comics.thumbnail.path}/portrait_fantastic.${comics.thumbnail.extension}`}
                alt="char"
              />
              <span>{comics.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterComics;
