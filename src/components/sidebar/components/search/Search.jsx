

import "./search.scss"
import { IoMdSearch } from "react-icons/io";
import { useDispatch, } from 'react-redux'
import { changeHotelNamePropery, } from "../../../../features/filtersSlice"

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
            <input onChange={(event)=> onTypeAction(event)} id="input1" placeholder="e.g. Hotel"/>
         </div>
      </div>
   )
}

export default Search

/*const filterArrItem = (item) => {
      if (hotelsFilters.hotelName === "") {
         setTempraryArr(...tempraryArr + item)
         return
      } else if (item.hotelName.toLowerCase().includes(hotelsFilters.hotelName.toLowerCase())) {
         return <Singlehotel
            key={item.id}
            id={item.id}
            location={item.location}
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
   }*/