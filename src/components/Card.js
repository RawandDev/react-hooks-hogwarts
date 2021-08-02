import { useState } from "react";
import AddHog from "./AddHog";
import FilterGreased from "./FilterGreased";

function Card({ hogs, onFilterHogs }) {
  const [checked, setChecked] = useState(false);
  const [filteredHogs, setFilteredHogs] = useState(onFilterHogs);
  const [showDetails, setShowDetails] = useState(false);

  const [sort, setSort] = useState([]);

  function onFilterHogsProp() {
    setChecked(() => !checked);
    setFilteredHogs(onFilterHogs);
  }

  function showDetailsHandler() {
    setShowDetails(() => !showDetails);
  }

  const greasedHog = filteredHogs.map((hog, i) => {
    return (
      <div className="ui card">
        <div className="ui masked image">
          <img src={hog.image} className="visible content" alt={hog.name} />
        </div>
        <div className="content">
          <p className="header">Name: {hog.name}</p>
          <div>
            <button type="button" onClick={showDetailsHandler}>
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && (
              <div
                className="meta"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <span className="date">Weight: {hog.weight}</span>
                <span className="date">Specialty: {hog.specialty}</span>
                <span className="date">
                  Highest Medal Achieved: {hog["highest medal achieved"]}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="extra content">
          <div>
            <i className="users icon"></i>Greased:{" "}
            {hog.greased ? "True" : "False"}
          </div>
        </div>
      </div>
    );
  });

  const allHogs = hogs.map((hog, i) => {
    return (
      <div className="ui card">
        <div className="ui masked image">
          <img src={hog.image} className="visible content" alt={hog.name} />
        </div>
        <div className="content">
          <p className="header">Name: {hog.name}</p>
          <div>
            <button type="button" onClick={showDetailsHandler}>
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && (
              <div
                className="meta"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <span className="date">Weight: {hog.weight}</span>
                <span className="date">Specialty: {hog.specialty}</span>
                <span className="date">
                  Highest Medal Achieved: {hog["highest medal achieved"]}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="extra content">
          <div>
            <i className="users icon"></i>Greased:{" "}
            {hog.greased ? "True" : "False"}
          </div>
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
      {/* <AddHog onAddNewHog={onAddNewHog} hogs={hogs} /> */}
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
