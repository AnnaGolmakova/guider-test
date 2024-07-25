import { useState } from "react";

import "./styles/variables.css";
import "./App.css";

import { data } from "./data/data";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <Card
        title={data[0].title}
        author={data[0].author}
        date={data[0].date}
        price={data[0].price}
        tags={data[0].tags}
      />
    </>
  );
}

export default App;
