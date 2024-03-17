

import { useState } from "react"
import "./radio.scss"
import { nanoid } from "@reduxjs/toolkit"

const radioOptionsArr = [
   {
      id: 1,
      name: "Any",
      mode: "any",
   },
   {
      id: 2,
      name: "Wonderful 9+",
      mode: "best",
   },
   {
      id: 3,
      name: "Very good 8+",
      mode: "good",
   },
   {
      id: 4,
      name: "Good 7+",
      mode: "bad",
   },
]
const Radio = () => {
   const [currRadioMode, setCurrRadioMode] = useState("any")
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline">Guest rating</div>
         <div className="sidebar__radio-box">
            {
               radioOptionsArr.map((item) => (
                  <button onClick={()=> setCurrRadioMode(item.mode)} key={item.id} className="sidebar__radio">
                     <div className="sidebar__checkmark">
                        {
                           item.mode === currRadioMode ? <div className="checkmark__yes"></div> :  <div className="checkmark__no"></div>
                        }
                     </div>
                     <div className="sidebar__text">{item.name}</div>
                  </button>
               ))
            }
         </div>
      </div>
   )
}

export default Radio