

import "./sidebar.scss"
import Map from "./components/map/Map"
import Checkbox from "./components/checkbox/Checkbox";
import Search from "./components/search/Search";
import Checkoption from "./components/checkoption/Checkoption";
import Price from "./components/price/Price";
import Radio from "./components/radio/Radio";
import Starrating from "./components/starrating/Starrating";
import Filtergrup from "./Filtergrup";
import Beadrooms from "./components/beadrooms/Beadrooms";
import { useSelector, useDispatch } from "react-redux"



const Sidebar = () => {
   const hotelsFilters = useSelector(state => state.filters)
   const dispatch = useDispatch()
   const popularFilters = [
      {
         id: 1,
         name: "Breacfast included",//
         type: "break"
      },
      {
         id: 2,
         name: "Pool",//
         type: "pool"
      },
      {
         id: 3,
         name: "4+ stars",//
         type: "stars"
      },
      {
         id: 4,
         name: "Liked",//
         type: "liked"
      },
      {
         id: 5,
         name: "WiFi included",//
         type: ""
      },
   ]
   const paymentFilters = [
      {
         id: 1,
         name: "Reserve now, pay later",
      },
      {
         id: 2,
         name: "Reserve without a credit card",
      },
   ]
   const properyFilter = [
      {
         id: 1,
         name: "Holiday rentals",//
         type: "rent"
      },
      {
         id: 2,
         name: "Guesthouse",//
         type: "guest"
      },
      {
         id: 3,
         name: "Hotel",//
         type: "hotel"
      },
   ]
   const bedFilter = [
      {
         id: 1,
         name: "King",//
         type: "king",
      },
      {
         id: 2,
         name: "Queen",//
         type: "queen",
      },
      {
         id: 3,
         name: "Double",//
         type: "double",
      },
   ]
   const mealFilter = [
      {
         id: 1,
         name: "Breakfast included",//
         type: "break",
      },
      {
         id: 2,
         name: "Dinner included",//
         type: "dinn",
      },
      {
         id: 3,
         name: "Lunch included",//
         type: "lunch",
      },
      {
         id: 4,
         name: "All-inclusive",//
      },
   ]
   const amenitiesFilter = [
      {
         id: 1,
         name: "Pool",//
         type: "pool"
      },
      {
         id: 2,
         name: "WiFi included",//
      },
      {
         id: 3,
         name: "Spa",//
      },
   ]
   return (
      <div className='sidebar'>
         <Map />

         <Checkbox />

         <Search />

         <div className="sidebar__filters">
            <h2 className="sidebar__title">Filter by</h2>

            <Filtergrup headline="Popular filters" arr={popularFilters} />

            <Price />

            <Radio />

            <Starrating />

            <Filtergrup headline="Payment type" arr={paymentFilters} />

            <div className="sidebar__filter">
               <div className="sidebar__headline">Property cancellation options</div>
               <div className="sidebar__box">
                  <Checkoption name="Fully refundable property" func={() => { }} />
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