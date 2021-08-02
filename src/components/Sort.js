// import { useState } from "react";

// function Sort({ hogs, filterHogs }) {
//   //   const sortHogsByName = hogs.sort((a, b) => {
//   //     return a.name.localeCompare(b.name);
//   //   });

//   const [sortHogsByName, setSortHogsByName] = useState(hogs);

//   function handleChange() {
//     console.log("handleChange");
//     setSortHogsByName(sortedAllHogs);
//   }

//   console.log(sortHogsByName);

//   const sortedAllHogs = sortHogsByName.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   });

//   return (
//     <div>
//       <h1>Sort</h1>
//       {/* {sortHogsByName.map((hog) => {
//         return (
//           <div key={hog.name}>
//             <h2>{hog.name}</h2>
//           </div>
//         );
//       })} */}

//       <select name="hello" onChange={handleChange}>
//         <option value="default">Default</option>
//         <option value="a">a</option>
//         <option value="b">b</option>
//       </select>
//     </div>
//   );
// }

// export default Sort;
