import "./Filter.css";
import SortingButton from "./SortingButton";

function Filter({ sortOption, sortOptionDirection, onSort }) {
  return (
    <div className="filter">
      <ul className="sort-options">
        <li className="sort-option">
          <SortingButton
            onClick={() => onSort("price")}
            isActive={sortOption === "price"}
            up={sortOption === "price" && sortOptionDirection === "desc"}
            label="price"
          />
        </li>
        <li className="sort-option">
          <SortingButton
            onClick={() => onSort("author")}
            isActive={sortOption === "author"}
            up={sortOption === "author" && sortOptionDirection === "desc"}
            label="author"
          />
        </li>
        <li className="sort-option">
          <SortingButton
            onClick={() => onSort("date")}
            isActive={sortOption === "date"}
            up={sortOption === "date" && sortOptionDirection === "desc"}
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
