import React from "react";
// import FilterGreased from "./FilterGreased";

function Card({ hogs, onFilterHogs }) {
  const [checked, setChecked] = React.useState(false);
  const [filteredHogs, setFilteredHogs] = React.useState(onFilterHogs);

  function onFilterHogsProp() {
    setChecked(() => !checked);
    setFilteredHogs(onFilterHogs);
  }

  // console.log(filteredHogs.map(hog => hog.name));

  const greasedHog = filteredHogs.map((hog, i) => {
    return (
      <div key={i}>
        <div>
          <h1>{hog.name}</h1>
          <img src={hog.image} alt={hog.name} />
        </div>
      </div>
    );
  });

  // console.log(greasedHog);

  return (
    <div>
      <label htmlFor="greasedHog">Greased Hog</label>
      <form>
        <input
          type="checkbox"
          name=""
          value={checked}
          onChange={onFilterHogsProp}
        />
      </form>
      
      {checked
        ? greasedHog
        : null}

      {/* <FilterGreased onFilterNow={onFilterHogsProp} /> */}
    </div>
  );
}

export default Card;
