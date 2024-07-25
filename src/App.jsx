import { useState } from "react";

import "./styles/variables.css";
import "./App.css";

import { data } from "./data/data";
import List from "./components/list/List";

function App() {
  return (
    <>
      <List items={data} total={2617} />
    </>
  );
}

export default App;
