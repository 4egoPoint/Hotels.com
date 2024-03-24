

import { useState } from "react"
import "./images.scss"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Images = ({ hotelImages }) => {
   const [currPicture, setCurrPicture] = useState(0)
   const switchPicture = (side) => {
      if (side === "l") {
         if (currPicture === 0) {
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
      <div className='images'>
         <div className="images__main-img">
            <img src={hotelImages[currPicture]} />
            <div className="images__additional">
               <button onClick={()=>{switchPicture("l")}} className="images__button"><MdKeyboardArrowLeft/></button>
               <button onClick={()=>{switchPicture("r")}} className="images__button"><MdKeyboardArrowRight/></button>
            </div>
         </div>
         <div className="images__first-col">
            <img src={hotelImages[1]} />
            <img src={hotelImages[2]} />
         </div>
         <div className="images__second-col">
            <img src={hotelImages[3]} />
            <img src={hotelImages[4]} />
         </div>
      </div>
   )
}

export default Images