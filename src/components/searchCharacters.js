import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CardCharacters from "./CardCharacters";

const SearchCharacter = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        "https://marvel-backend-app.herokuapp.com/searchByCharacter",
        {
          headers: { search: search },
        }
      );
      setData(response.data);
      history.push("/characterSearch", { search: response.data.results });
      console.log(response.data.results);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <div className="search">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter name of character"
          type="text"
          name="character"
          /* value={search} */
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchCharacter;
