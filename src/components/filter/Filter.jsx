import "./Filter.css";
import SortingButton from "./SortingButton";

function Filter() {
  return (
    <div className="filter">
      <ul className="sort-options">
        <li className="sort-option">
          <SortingButton isActive label="price" />
        </li>
        <li className="sort-option">
          <SortingButton sortDirection="desc" label="author" />
        </li>
        <li className="sort-option">
          <SortingButton label="date" />
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
