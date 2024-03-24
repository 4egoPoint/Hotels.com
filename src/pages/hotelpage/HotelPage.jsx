

import "./hotelpage.scss"
import { useSelector, useDispatch } from 'react-redux'
import Comertial from "../../components/list/components/comertial/Comertial"
import TopRow from "./components/top-row/TopRow";
import Images from "./components/images/Images";
import Navigator from "./components/navigator/Navigator";
import Info from "./components/info/Info";
import Reserve from "./components/reserve/Reserve";
import { useEffect, useState } from "react";

const HotelPage = () => {
   const hotelObject = useSelector(state => state.hotelPage)
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])
   return (
      <div className="hotelpage">
         <div className="hotelpage__wrapper">
            <div className="hotelpage__column">
               <TopRow id={hotelObject.id} />
               <Images hotelImages={hotelObject.hotelImages} />
               <div className="hotelpage__sicky">
                  <Navigator />
               </div>
               <Info
                  hotelName={hotelObject.hotelName}
                  hotelStarsCounter={hotelObject.hotelStarsCounter}
                  hotelRating={hotelObject.hotelRating}
                  hotelReviews={hotelObject.hotelReviews}
                  hotelPreDescription={hotelObject.hotelPreDescription}
               />
               <Comertial />
               <Reserve minCostPerNight={hotelObject.minCostPerNight} />
               
            </div>
            <div className="hotelpage__holder"></div>
         </div>
      </div>
   )
}

export default HotelPage