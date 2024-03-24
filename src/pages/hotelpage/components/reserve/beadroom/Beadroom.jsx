

import "./beadroom.scss"
import { FaBed, FaWifi } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { TbZoomInArea } from "react-icons/tb";
import { useSelector } from "react-redux"


const Beadroom = ({daysValue, img, price, sqm, name, beadName }) => {
   const priceOff = useSelector(state => state.hotelPage.priceOff)
   return (
      <div className='beadroom'>
         <img src={img} />
         <div className="beadroom__info">
            <h5 className="beadroom__name">{name}</h5>
            <div className="beadroom__option"><IoPersonSharp /><span>Sleaps 2</span></div>
            <div className="beadroom__option"><FaWifi /><span>Free WiFi</span></div>
            <div className="beadroom__option"><TbZoomInArea /><span>{sqm} sq m</span></div>
            <div className="beadroom__option"><FaBed /><span>1 {beadName} bed</span></div>
         </div>
         <div className="beadroom__price">
            <div className="beadroom__text text">
               <div className="bottom__right">
                  {
                     priceOff !== 0 ? <div className="bottom__sale">{priceOff}% off</div> : null
                  }
                  <div className="bottom__prices">
                     {priceOff !== 0 ? <div className="bottom__normal-price"><span>€{daysValue * price}</span></div> : null}
                     <div className="bottom__final-price">€
                        {priceOff !== 0 ? Math.round(daysValue * (price / 100 * (100 - priceOff))) : Math.round(daysValue * price)}
                     </div>
                  </div>
                  <div className="bottom__time-period">for {daysValue} {daysValue === 1 ? "night" : "nights"}</div>
                  <div className="bottom__price-per-night">€{price} per night</div>
               </div>
            </div>
            <div className="beadroom__button"><button>Reserve</button></div>
         </div>
      </div>
   )
}

export default Beadroom