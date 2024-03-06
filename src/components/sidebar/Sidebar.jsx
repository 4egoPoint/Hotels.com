

import "./sidebar.scss"
import Map from "./componenets/Map"
import Checkbox from "./componenets/Checkbox";
import Search from "./componenets/Search";
import Checkoption from "./componenets/Checkoption";
import Price from "./componenets/Price";
import Radio from "./componenets/Radio";


const popularFilters = [
   {
      id: 1,
      name: "Breacfast included",//
      func: () => { }
   },
   {
      id: 2,
      name: "Pool",//
      func: () => { }
   },
   {
      id: 3,
      name: "4+ stars",//
      func: () => { }
   },
   {
      id: 4,
      name: "Saved",//
      func: () => { }
   },
   {
      id: 5,
      name: "WiFi included",//
      func: () => { }
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
                  {
                     popularFilters.map((item) => <Checkoption key={item.id} name={item.name} func={item.func} />)
                  }
               </div>
            </div>

            <Price />
            
            <Radio />
         </div>
      </div>
   )
}

export default Sidebar