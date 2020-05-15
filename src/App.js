import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import Header from "./components/Header";
import CharactersComics from "./containers/CharacterComics";

import CharactersSearch from "./containers/characterSearch";
import ComicSearch from "./containers/comicSearch";
const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/id">
          <CharactersComics />
        </Route>
        <Route path="/characterSearch">
          <CharactersSearch />
        </Route>
        <Route path="/comicSearch">
          <ComicSearch />
        </Route>
        <Route path="/">
          <Characters />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
