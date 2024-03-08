

import "./sidebar.scss"
import Map from "./componenets/Map"
import Checkbox from "./componenets/Checkbox";
import Search from "./componenets/Search";
import Checkoption from "./componenets/Checkoption";
import Price from "./componenets/Price";
import Radio from "./componenets/Radio";
import Starrating from "./componenets/Starrating";
import Filtergrup from "./componenets/Filtergrup";
import Beadrooms from "./componenets/Beadrooms";


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
const paymentFilters = [
   {
      id: 1,
      name: "Reserve now, pay later",//
      func: () => { }
   },
   {
      id: 2,
      name: "Reserve without a credit card",//
      func: () => { }
   },
]
const properyFilter = [
   {
      id: 1,
      name: "Holiday rentals",//
      func: () => { }
   },
   {
      id: 2,
      name: "Guesthouse",//
      func: () => { }
   },
   {
      id: 3,
      name: "Hotel",//
      func: () => { }
   },
]
const bedFilter = [
   {
      id: 1,
      name: "King",//
      func: () => { }
   },
   {
      id: 2,
      name: "Queen",//
      func: () => { }
   },
   {
      id: 3,
      name: "Double",//
      func: () => { }
   },
]
const mealFilter = [
   {
      id: 1,
      name: "Breakfast included",//
      func: () => { }
   },
   {
      id: 2,
      name: "Dinner included",//
      func: () => { }
   },
   {
      id: 3,
      name: "Lunch included",//
      func: () => { }
   },
   {
      id: 4,
      name: "All-inclusive",//
      func: () => { }
   },
]
const amenitiesFilter = [
   {
      id: 1,
      name: "Pool",//
      func: () => { }
   },
   {
      id: 2,
      name: "WiFi included",//
      func: () => { }
   },
   {
      id: 3,
      name: "Spa",//
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

            <Filtergrup headline="Popular filters" arr={popularFilters}/>

            <Price />
            
            <Radio />

            <Starrating />

            <Filtergrup headline="Payment type" arr={paymentFilters} />

            <div className="sidebar__filter">
               <div className="sidebar__headline">Property cancellation options</div>
               <div className="sidebar__box">
                  <Checkoption name="Fully refundable property" func={()=>{}} />
               </div>
            </div>

            <Filtergrup headline="Property type" arr={properyFilter} />
            
            <Beadrooms />

            <Filtergrup headline="Bed preference" arr={bedFilter} />

            <Filtergrup headline="Meal plans available" arr={mealFilter} />

            <Filtergrup headline="Amenities" arr={amenitiesFilter} />
         </div>
      </div>
   )
}

export default Sidebar