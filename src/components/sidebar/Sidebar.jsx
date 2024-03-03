

import "./sidebar.scss"
import Map from "./componenets/Map"
import Checkbox from "./componenets/Checkbox";
import Search from "./componenets/Search";

const poularCompon = [
   {
      id: 1,
      name: "Breacfast included",
      func: ()=> {}
   },
   {
      id: 1,
      name: "Pool",
      func: ()=> {}
   },
   {
      id: 1,
      name: "4+ stars",
      func: ()=> {}
   },
   {
      id: 1,
      name: "Saved",
      func: ()=> {}
   },
]

const Sidebar = () => {
   return (
      <div className='sidebar'>
         <Map />

         <Checkbox />

         <Search />

         <div className="sidebar__filters">
            <h2 className="sidebar__title">Filter by</h2>
            <div className="sidebar__filter">
               <div className="sidebar__headline">Popular filters</div>
               <div className="sidebar__box">
                  <label className="container">One
                     <input type="checkbox"  />
                     <span className="checkmark"></span>
                  </label> 
               </div>
            </div>
         </div>
      </div>
   )
}

export default Sidebar