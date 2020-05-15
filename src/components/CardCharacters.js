import React from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

const CardCharacters = ({ character }) => {
  const history = useHistory();
  return (
    <div className="characters">
      {character.map((character, index) => {
        return (
          <div
            className="card"
            onClick={async () => {
              try {
                const response = await axios.get("http://localhost:3000/id", {
                  headers: { id: character.id },
                });
                console.log(response.data.results);
                history.push("/id", { characterId: response.data.results });
              } catch (error) {
                console.log(error.message);
              }
            }}
          >
            <img
              src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
              alt="char"
            />
            <div className="name">
              <h3>{character.name} </h3>
            </div>

            <div className="description">
              <p>{character.description} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCharacters;
