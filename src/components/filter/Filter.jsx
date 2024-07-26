import "./Filter.css";
import SortingButton from "./SortingButton";
import { useState } from "react";

function Filter({ sortingType, sortingDirection }) {
  const [currentOption, setCurrentOption] = useState(null);
  const [currentDirection, setCurrentDirection] = useState("asc");

  function invertDirection() {
    setCurrentDirection(currentDirection === "asc" ? "desc" : "asc");
  }

  function changeDirection(type) {
    console.log(currentOption, currentDirection);
    if (currentOption == type) {
      invertDirection();
    } else {
      setCurrentOption(type);
      setCurrentDirection("asc");
    }
  }

  return (
    <div className="filter">
      <ul className="sort-options">
        <li className="sort-option">
          <SortingButton
            onClick={() => {
              changeDirection("price");
            }}
            isActive={currentOption === "price"}
            up={currentOption === "price" && currentDirection === "desc"}
            label="price"
          />
        </li>
        <li className="sort-option">
          <SortingButton
            onClick={() => {
              changeDirection("author");
            }}
            isActive={currentOption === "author"}
            up={currentOption === "author" && currentDirection === "desc"}
            label="author"
          />
        </li>
        <li className="sort-option">
          <SortingButton
            onClick={() => {
              changeDirection("date");
            }}
            isActive={currentOption === "date"}
            up={currentOption === "date" && currentDirection === "desc"}
            label="date"
          />
        </li>
      </ul>
      <div className="tags">
        <button className="tags__button">Tags</button>
        <button className="sort-option__button">reset rules</button>
      </div>
    </div>
  );
}

export default Filter;
