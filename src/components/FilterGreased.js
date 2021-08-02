// import { useState } from "react";

function FilterGreased({ onFilterNow, checkValue }) {
  
  console.log(checkValue);

  return (
    <form>
      <input
        type="checkbox"
        name=""
        value={checkValue}
        onChange={onFilterNow}
      />
    </form>
  );
}

export default FilterGreased;
