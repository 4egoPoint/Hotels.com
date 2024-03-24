

import "./info.scss"
import { IoMdCheckmark, IoMdStar, IoIosSnow, } from "react-icons/io";
import { MdOutlinePets, MdOutlineRestaurant, MdOutlineWifi, MdLocalBar } from "react-icons/md";
import { FaCar, FaLocationDot } from "react-icons/fa6";
import Map from "../../../../components/sidebar/components/map/Map";
import Raiting from "./raiting/Raiting";
import Amenities from "./amenities/Amenities";


const Info = ({ hotelName, hotelStarsCounter, hotelRating, hotelReviews, hotelPreDescription }) => {
   let starsArr = []
   for (let i=0; i < hotelStarsCounter; i++) {
      starsArr.push(true)
   }
   return (
      <div className='info'>
         <div className="info__adwantages">
            <h1 className="info__headline">{hotelName}</h1>
            <div className="info__stars">{starsArr.map( i => <IoMdStar/>)}</div>
            <div className="info__subtitle">{hotelPreDescription}</div>
            <div className="info__payment"><IoMdCheckmark /><span>Reserve now, pay later</span></div>

            <Raiting hotelRating={hotelRating} hotelReviews={hotelReviews}/>
            
            <Amenities />

            
         </div>
         <div className="info__location">
            <h2>Location</h2>
            <Map />
            <h3>In the middle of nowhere, 43A</h3>
            <div className="info__locations-col">
               <div className="info__locations-item">
                  <div className="info__icon"><FaLocationDot /></div>
                  <span>Here </span>
                  11 min walk
               </div>
               <div className="info__locations-item">
                  <div className="info__icon"><FaLocationDot /></div>
                  <span>There</span>
                  14 min walk
               </div>
               <div className="info__locations-item">
                  <div className="info__icon"><FaLocationDot /></div>
                  <span>IDK where</span>
                  20 min drive
               </div>
            </div>
         </div>
      </div>
   )
}

export default Info