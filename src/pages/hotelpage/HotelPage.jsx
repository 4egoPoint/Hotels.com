

import "./hotelpage.scss"
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import TopRow from "./components/top-row/TopRow";

const HotelPage = () => {
   const hotel = useSelector(state => state.hotelPage)
   const [hotelObject, setHotelObject] = useState(hotel)
   return (
      <div className="hotelpage">
         <div className="hotelpage__wrapper">
            {hotelObject.hotelName}
         </div>
      </div>
   )
}

export default HotelPage