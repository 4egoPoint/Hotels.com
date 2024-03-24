

import Sidebar from "../sidebar/Sidebar"
import Filterscontrol from "./components/filterscontrol/Filterscontrol"
import Accomodation from "./components/accomodation/Accomodation"
import Sorting from "./components/sorting/Sorting"
import "./list.scss"
import { useSelector } from "react-redux"
import Comertial from "./components/comertial/Comertial"
import Singlehotel from "./components/singlehotel/Singlehotel"
import { IoSadOutline } from "react-icons/io5";

const List = () => {
   const hotelsArr = useSelector(state => state.hotelsList)
   const hotelsFilters = useSelector(state => state.filters)
   const filtersFunctionns = {
      checkBreakfast: (item) => {
         if(item === false) return false
         if(hotelsFilters.meals.isBreakfastIncluded){
            if(item.meals.isBreakfastIncluded) return item
            return false
         }
         return item
      },
      checkLunch: (item) => {
         if(item === false) return false
         if(hotelsFilters.meals.isLunchIncluded){
            if(item.meals.isLunchIncluded) return item
            return false
         }
         return item
      },
      checkDinner: (item) => {
         if(item === false) return false
         if(hotelsFilters.meals.isDinnerIncluded){
            if(item.meals.isDinnerIncluded) return item
            return false
         }
         return item
      },
      checkPool: (item) => {
         if(item === false) return false
         if(hotelsFilters.amenities.isPoolIncluded){
            if(item.amenities.isPoolIncluded) return item
            return false
         }
         return item
      },
      checkPrice: (item) => {
         if(item === false) return false
         if(hotelsFilters.minPrice !== 0){
            if(item.minCostPerNight > hotelsFilters.minPrice) return item
            return false
         }
         return item
      }
   }
   const isFilterActive = hotelsFilters.minPrice !== 0 || hotelsFilters.meals.isBreakfastIncluded || hotelsFilters.meals.isLunchIncluded || hotelsFilters.meals.isDinnerIncluded || hotelsFilters.amenities.isPoolIncluded || hotelsFilters.isPriceSeted
   const filterArrItem = (item) => {
      if (hotelsFilters.hotelName !== "") {
         if (item.hotelName.toLowerCase().includes(hotelsFilters.hotelName.toLowerCase())) {
            return <Singlehotel
               key={item.id}
               id={item.id}
               isLiked={item.isLiked}
               hotelName={item.hotelName}
               hotelImages={item.hotelImages}
               hotelRating={item.hotelRating}
               minCostPerNight={item.minCostPerNight}
               priceOff={item.priceOff}
               hotelDescription={item.hotelDescription}
               hotelStarsCounter={item.hotelStarsCounter}
               hotelReviews={item.hotelReviews}
            />
         }
         return
      } else if (isFilterActive) {
         let lox = item
         lox = filtersFunctionns.checkBreakfast(lox)
         lox = filtersFunctionns.checkLunch(lox)
         lox = filtersFunctionns.checkDinner(lox)
         lox = filtersFunctionns.checkPrice(lox)
         lox = filtersFunctionns.checkPool(lox)
         if (lox !== false) {
            return <Singlehotel
               key={lox.id}
               id={lox.id}
               isLiked={lox.isLiked}
               hotelName={lox.hotelName}
               hotelImages={lox.hotelImages}
               hotelRating={lox.hotelRating}
               minCostPerNight={lox.minCostPerNight}
               priceOff={lox.priceOff}
               hotelDescription={lox.hotelDescription}
               hotelStarsCounter={lox.hotelStarsCounter}
               hotelReviews={lox.hotelReviews}
            />
         }
         return
      } else {
         return <Singlehotel
            key={item.id}
            id={item.id}
            isLiked={item.isLiked}
            hotelName={item.hotelName}
            hotelPreDescription={item.hotelPreDescription}
            hotelImages={item.hotelImages}
            hotelRating={item.hotelRating}
            minCostPerNight={item.minCostPerNight}
            priceOff={item.priceOff}
            hotelDescription={item.hotelDescription}
            hotelStarsCounter={item.hotelStarsCounter}
            hotelReviews={item.hotelReviews}
         />
      }
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
                     {/* <Sorting /> */}
                  </div>
                  <Comertial />
                  <div className="list__list">
                     {
                        hotelsArr.map((item) => filterArrItem(item))
                     }
                     <div className="list__list-bg"><IoSadOutline />There is no hotels like this<IoSadOutline /></div>
                  </div>
               </div>
            </div>
            <div className="list__holder"></div>
         </div>
      </div>
   )
}

export default List