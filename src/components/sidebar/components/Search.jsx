

import React from 'react'
import { IoMdSearch } from "react-icons/io";


const Search = (id) => {
   const focusOnInput = () => {
      document.getElementById("input1").focus(); 
      return false;
   }
   return (
      <div className="sidebar__search-block">
         <div className="sidebar__title">Search by name</div>
         <div className="sidebar__searchbar"  onClick={()=>focusOnInput()}>
            <IoMdSearch />
            <input id="input1" placeholder="e.g. Hotel" />
         </div>
      </div>
   )
}

export default Search