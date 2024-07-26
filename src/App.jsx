import { useState } from "react";

import "./styles/variables.css";
import "./App.css";

import { data } from "./data/data";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import List from "./components/list/List";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <List items={data} total={2617} />
    </>
  );
}

export default App;
