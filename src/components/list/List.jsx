

import Sidebar from "../sidebar/Sidebar"
import Filterscontrol from "./components/filterscontrol/Filterscontrol"
import Accomodation from "./components/accomodation/Accomodation"
import Sorting from "./components/sorting/Sorting"
import "./list.scss"
import { useSelector } from "react-redux"
import Comertial from "./components/comertial/Comertial"
import Singlehotel from "./components/singlehotel/Singlehotel"

const List = () => {
   const hotelsArr = useSelector(state => state.hotelsList)
   const filterArrItem = (item) => {
      return <Singlehotel
         key={item.id}
         id={item.id}
         isLiked={item.isLiked}
         hotelName={item.hotelName}
         hotelImages={item.hotelImages}
         hotelRating={item.hotelRating}
         minCostPerNight={item.minCostPerNight}
         priceOff={item.priceOff}
         paymentType={item.paymentType}
         hotelDescription={item.hotelDescription}
         hotelStarsCounter={item.hotelStarsCounter}
         hotelRoomsArr={item.hotelRoomsArr}
         hotelReviews={item.hotelReviews}
         meals={item.meals}
         amenities={item.amenities}
      />
   }

   return (
      <div className="list">
         <div className="list__wrapper">
            <div className="list__box">
               <div className="list__sidebar">
                  <Sidebar />
               </div>
               <div className="list__list-column">
                  <Filterscontrol />
                  <div className="list__top-row">
                     <Accomodation />
                     <Sorting />
                  </div>
                  <Comertial />
                  <div className="list__list">
                     {
                        hotelsArr.map((item) => filterArrItem(item))
                     }
                  </div>
               </div>
            </div>
            <div className="list__holder"></div>
         </div>
      </div>
   )
}

export default List