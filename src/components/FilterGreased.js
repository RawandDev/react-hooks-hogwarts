// import { useState } from "react";

function FilterGreased({ onFilterNow, checkValue }) {
  //   const [filterPigs, setFilterPigs] = useState(false);

  //   function handleChange() {
  //     setFilterPigs(() => !filterPigs);
  //   }

  //   console.log(filterPigs);

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
