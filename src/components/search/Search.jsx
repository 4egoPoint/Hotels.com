

import "./search.scss"
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";
import { IoMdPerson, IoMdSearch } from "react-icons/io";

const Search = () => {


   const checkFilters = (event) => {
      event.preventDefault()
   }
   return (
      <div className='search'>
         <div className="search__wrapper">
            <form onSubmit={(event)=>checkFilters(event)} className="search__form">
               <button className="search__filter">
                  <div className="search__logo"><FaLocationDot /></div>
                  <div className="search__text">
                     <h4 className="search__title">City</h4>
                     <div className="search__prop">Warszawa</div>
                  </div>
               </button>
               <button className="search__filter">
                  <div className="search__logo"><FaCalendarDay /></div>
                  <div className="search__text">
                     <h4 className="search__title">Date</h4>
                     <div className="search__prop">Fab 7</div>
                  </div>
               </button>
               <button className="search__filter">
                  <div className="search__logo"><IoMdPerson /></div>
                  <div className="search__text">
                     <h4 className="search__title">Travellers</h4>
                     <div className="search__prop">2 travellers</div>
                  </div>
               </button>
               <button className="search__search-ico"><IoMdSearch /></button>
            </form>
            <div className="search__holder"></div>
         </div>
      </div>
   )
}

export default Search