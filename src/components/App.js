import { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Card from "./Card";

function App() {
  const [hogData, setHogData] = useState(hogs);
  // filter the hogs by Greased
  const filteredHogs = hogs.filter((hog) => {
    return hog.greased;
  });

  // function onAddNewHog(hog) {
  //   setHogData([...hogData, hog]);
  // }

  return (
    <div className="App">
      <Nav />
      <Card hogs={hogs} onFilterHogs={filteredHogs}/>
    </div>
  );
}

export default App;
