import React from "react";
import '../App.css'
const SearchBox = ({setSearchInput}) => {

 return (
  <div className="p-2 justify-center">
  <input className="p-4 bg-[#90EE90] text-white placeholder-white w-1/2 mx-auto flex outline-none" type="search"
   placeholder="Search Rockets"
    onChange={(e)=>setSearchInput(e.target.value)}

    />
    </div>
 );
}
export default SearchBox