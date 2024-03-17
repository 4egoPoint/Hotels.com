

import "./search.scss"
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { changeHotelNamePropery } from "../../../../features/filtersSlice"

const Search = () => {
   const dispatch = useDispatch()
   const onTypeAction = (e) => {
      dispatch(changeHotelNamePropery(e.target.value))
   }
   const focusOnInput = () => {
      document.getElementById("input1").focus(); 
      return false;
   }
   return (
      <div className="sidebar__search-block">
         <div className="sidebar__title">Search by name</div>
         <div className="sidebar__searchbar"  onClick={()=>focusOnInput()}>
            <IoMdSearch />
            <input onChange={(event)=>onTypeAction(event)} id="input1" placeholder="e.g. Hotel"/>
         </div>
      </div>
   )
}

export default Search