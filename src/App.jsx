import { useState, useEffect } from "react";
import * as chrono from "chrono-node";

import "./styles/variables.css";
import "./App.css";

import { data } from "./data/data";

import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import List from "./components/list/List";

function App() {
  const [booksList, setBooksList] = useState([...data]);
  const [currentSortOption, setCurrentSortOption] = useState(null);
  const [currentSortDirection, setCurrentSortDirection] = useState("asc");
  const [tags, setTags] = useState(new Set([]));
  const [selectedTags, setSelectedTags] = useState(new Set([]));

  useEffect(() => {
    data.map((entry) => entry.tags.map((tag) => setTags(tags.add(tag))));
  }, [data, tags]);

  useEffect(() => {
    sortList({ type: currentSortOption, direction: currentSortDirection });
  }, [currentSortOption, currentSortDirection]);

  function changeSortDirection(type) {
    if (currentSortOption == type) {
      setCurrentSortDirection(currentSortDirection === "asc" ? "desc" : "asc");
    } else {
      setCurrentSortOption(type);
      setCurrentSortDirection("asc");
    }
  }

  function sortByAuthor(direction) {
    const surname = (name) => name.split(" ").slice(-1)[0];
    const invert = direction === "desc" ? -1 : 1;

    return [...booksList].sort((a, b) => {
      return (
        invert *
        surname(a.author).localeCompare(surname(b.author), "en", {
          sensitivity: "base",
        })
      );
    });
  }

  function sortByPrice(direction) {
    return [...booksList].sort((a, b) => {
      if (direction === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  function sortByDate(direction) {
    return [...booksList].sort((a, b) => {
      if (direction === "asc") {
        return chrono.parse(a.date)[0].date() - chrono.parse(b.date)[0].date();
      } else {
        return chrono.parse(b.date)[0].date() - chrono.parse(a.date)[0].date();
      }
    });
  }

  function sortList(options) {
    // prettier-ignore
    if (options.type === "author") setBooksList(sortByAuthor(options.direction));
    if (options.type === "price") setBooksList(sortByPrice(options.direction));
    if (options.type === "date") setBooksList(sortByDate(options.direction));
  }

  function handleTagSelection(tag) {
    if (!selectedTags.has(tag)) {
      setSelectedTags(new Set(selectedTags.add(tag)));
    } else {
      setSelectedTags(new Set([...selectedTags].filter((x) => x !== tag)));
    }
  }

  function resetFilter() {
    setSelectedTags(new Set());
  }

  return (
    <>
      <Header />
      <Filter
        onSort={changeSortDirection}
        onTagClick={handleTagSelection}
        onResetFilter={resetFilter}
        sortOption={currentSortOption}
        sortOptionDirection={currentSortDirection}
        tags={tags}
        selectedTags={selectedTags}
      />
      <List items={booksList} />
    </>
  );
}

export default App;
