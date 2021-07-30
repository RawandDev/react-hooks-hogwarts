import { useState } from "react";
import FilterGreased from "./FilterGreased";

function Card({ hogs, onFilterHogs }) {
  const [checked, setChecked] = useState(false);
  const [filteredHogs, setFilteredHogs] = useState(onFilterHogs);

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
      <label htmlFor="greasedHog">Show Greased Hogs</label>
      {/* <form>
        <input
          type="checkbox"
          name=""
          value={checked}
          onChange={onFilterHogsProp}
        />
      </form> */}
      <FilterGreased onFilterNow={onFilterHogsProp} checkValue={checked} />

      {checked ? greasedHog : null}
    </div>
  );
}

export default Card;
