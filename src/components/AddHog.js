// import { useState } from "react";

// function AddHog({ onAddNewHog, hogs }) {
//   const [newHog, setNewHog] = useState({
//     name: "",
//     weight: 0,
//     greased: false,
//     specialty: "",
//     image:
//       "https://www.k3ma.com/wp-content/uploads/2017/04/default-image-620x600.jpg",
//     "highest medal achieved": "wood",
//   });
//   const [hogList, setHogList] = useState(hogs);

//   function submitHandler(e) {
//     e.preventDefault();
//     const newList = {
//       ...newHog,
//       ...hogList,
//     };
//     setHogList(newList);
//   }

//   console.log(hogList);

//   function handleChange(e) {
//     const name = e.target.name;
//     const value = e.target.value;

//     setNewHog({ ...newHog, [name]: value });
//   }

//   return (
//     <form className="ui form" onSubmit={submitHandler}>
//       <input
//         type="text"
//         name="name"
//         onChange={handleChange}
//         value={newHog.name}
//         placeholder="Name"
//       />
//       <input
//         type="number"
//         name="weight"
//         onChange={handleChange}
//         value={newHog.weight}
//         placeholder="Weight"
//       />
//       <button type="submit" className="ui primary button">Submit</button>
//     </form>
//   );
// }

// export default AddHog;
