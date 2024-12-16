// import { useState } from "react";
// import { AiOutlineSearch } from "react-icons/ai";

// export function Search({ visible = true }) {
//   const [city, setCity] = useState("");

//   const handleChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSearch = () => {
//     console.log(city); 
//   };

//   return (
//     <div className={`${visible ? 'block' : 'hidden'} w-[400px] h-[55px] bg-white rounded-3xl flex items-center ml-10 mt-10`}>
//       <AiOutlineSearch className="text-2xl ml-5" />
//       <input 
//         className="p-3 text-xl border-none mr-1 focus:outline-none" 
//         type="text" 
//         placeholder="City name..." 
//         value={city}
//         onChange={handleChange} 
//       />
//       <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
//         Search
//       </button>
//     </div>
//   );
// }
