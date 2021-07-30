import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Card from "./Card";

function App() {
  // filter the hogs by Greased
  const filteredHogs = hogs.filter((hog) => {
    return hog.greased;
  });

  return (
    <div className="App">
      <Nav />
      <Card hogs={hogs} onFilterHogs={filteredHogs} />
    </div>
  );
}

export default App;
