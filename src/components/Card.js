import { useState } from "react";
import AddHog from "./AddHog";
import FilterGreased from "./FilterGreased";
// import Sort from "./Sort";

function Card({ hogs, onFilterHogs, onAddNewHog }) {
  const [checked, setChecked] = useState(false);
  const [filteredHogs, setFilteredHogs] = useState(onFilterHogs);

  const [sort, setSort] = useState([]);

  function onFilterHogsProp() {
    setChecked(() => !checked);
    setFilteredHogs(onFilterHogs);
  }

  const greasedHog = filteredHogs.map((hog, i) => {
    return (
      <div class="ui card">
        <div class="ui masked image">
          <img src={hog.image} class="visible content" />
        </div>
        <div class="content">
          <a class="header">Name: {hog.name}</a>
          <div class="meta">
            <span class="date">Weight: {hog.weight}</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="users icon"></i>Greased: {hog.greased ? "True" : "False"}
          </a>
        </div>
      </div>
    );
  });

  const allHogs = hogs.map((hog, i) => {
    return (
      <div class="ui card">
        <div class="ui masked image">
          <img src={hog.image} class="visible content" />
        </div>
        <div class="content">
          <a class="header">Name: {hog.name}</a>
          <div class="meta">
            <span class="date">Weight: {hog.weight}</span>
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="users icon"></i>Greased: {hog.greased ? "True" : "False"}
          </a>
        </div>
      </div>
    );
  });

  const nameSort = hogs.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  function sortedHandler(e) {
    console.log(e.target.value);
    if (e.target.value === "name") {
      setSort(nameSort);
    } else if (e.target.value === "default") {
      setSort(hogs);
    }
  }

  return (
    <div>
      <AddHog onAddNewHog={onAddNewHog} hogs={hogs} />
      <select name="p" onChange={sortedHandler}>
        <option value="default">Default</option>
        <option value="name">Name</option>
      </select>
      <label htmlFor="greasedHog">Show Greased Hogs</label>
      <FilterGreased onFilterNow={onFilterHogsProp} checkValue={checked} />
      {checked ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>{greasedHog}</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>{allHogs}</div>
      )}
    </div>
  );
}

export default Card;
