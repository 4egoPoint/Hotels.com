
import { changeLikedValue } from "../../../../features/hotelsSlice"
import { Link } from "react-router-dom"
import "./singlehotel.scss"
import { useState } from "react"
import { SlPicture } from "react-icons/sl";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useDispatch } from 'react-redux'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const Singlehotel = ({ id, isLiked, hotelName, hotelImages, hotelRating, minCostPerNight, priceOff, paymentType, hotelDescription, hotelReviews }) => {
   const dispatch = useDispatch()
   const [howManyNights, setHowMenyNights] = useState(2)
   const [currPicture, setCurrPicture] = useState(0)
   const description = hotelDescription.substring(0, 70)
   const switchPicture = (side) => {
      if (side === "l") {
         if(currPicture === 0){
            setCurrPicture(hotelImages.length - 1)
         } else {
            setCurrPicture(currPicture - 1)
         }
      }
      if (side === "r") {
         if ((hotelImages.length - 1) === currPicture) {
            setCurrPicture(0)
         } else {
            setCurrPicture(currPicture + 1)
         }
      }
   }

   return (
      <Link to="" className='singlehotel'>
         <div className="singlehotel__img-side">
            {
               hotelImages.length !== 0 ? (
                  <img src={hotelImages[currPicture]} />
               ) : (
                  <div className="singlehotel__img-holder"><SlPicture /></div>
               )
            }
            <button onClick={() => dispatch(changeLikedValue(id))} className="singlehotel__heart-btn">
               {
                  !isLiked ? <FaRegHeart /> : <FaHeart />
               }
            </button>
            {
               hotelImages.length === 0 ? null : (
                  <div className="singlehotel__slider-bar">
                     <button onClick={() => switchPicture("l")}><MdKeyboardArrowLeft /></button>
                     <button onClick={() => switchPicture("r")}><MdKeyboardArrowRight /></button>
                  </div>
               )
            }
         </div>

         <div className="singlehotel__info-side info-side">
            <div className="info-side__top">
               <div className="info-side__main-info">
                  <h2 className="info-side__hotel-name">{hotelName}</h2>
                  <div className="info-side__location">Warsaw</div>
               </div>
               <div className="info-side__description-box">
                  <p className="info-side__text">{description}{hotelDescription.length >= 50 ? "..." : null}</p>
               </div>
            </div>

            <div className="info-side__bottom bottom">
               <div className="bottom__left">
                  <div className="bottom__payment-type">{paymentType}</div>
                  <div className="bottom__idk"><img src="moon.png" />Collect stamps</div>
                  <div className="bottom__raitng">
                     <div className="bottom__rating-num">{hotelRating}</div>
                     <div className="bottom__inf">
                        <div className="bottom__rating-word">Good</div>
                        <div className="bottom__reviews">{hotelReviews} reviews</div>
                     </div>
                  </div>
               </div>

               <div className="bottom__right">
                  {
                     priceOff !== 0 ? <div className="bottom__sale">{priceOff}% off</div> : null
                  }
                  <div className="bottom__prices">
                     {priceOff !== 0 ? <div className="bottom__normal-price"><span>€{howManyNights * minCostPerNight}</span></div> : null}
                     <div className="bottom__final-price">€
                        {priceOff !== 0 ? howManyNights * (minCostPerNight / 100 * (100 - priceOff)) : howManyNights * minCostPerNight}
                     </div>
                  </div>
                  <div className="bottom__time-period">for {howManyNights} {howManyNights === 1 ? "night" : "nights"}</div>
                  <div className="bottom__price-per-night">€{minCostPerNight} per night</div>
                  <div className="bottom__policy">includes taxes & fees</div>
               </div>
            </div>

         </div>
      </Link>
   )
}

export default Singlehotel