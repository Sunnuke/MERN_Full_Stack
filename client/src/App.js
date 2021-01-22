import React from "react";
import { Router } from "@reach/router";
import './App.css';
import ListPage from "./views/ListPage";
import FormPage from "./views/FormPage";
import Details from "./views/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <ListPage path="pirate" />
        <FormPage path="pirate/new" />
        <Details path="pirate/:id" />
      </Router>
    </div>
  );
}

export default App;
