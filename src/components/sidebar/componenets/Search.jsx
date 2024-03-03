

import React from 'react'
import { IoMdSearch } from "react-icons/io";


const Search = () => {
   return (
      <div className="sidebar__search-block">
         <div className="sidebar__title">Search by name</div>
         <div className="sidebar__searchbar">
            <IoMdSearch />
            <input placeholder="e.g. Hotel" />
         </div>
      </div>
   )
}

export default Search