

import React from 'react'
import { MdOutlineStar } from "react-icons/md";

const Starrating = () => {
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline" > Property class</div >
         <div className="sidebar__starrating">
            <button className="sidebar__starrating-item sidebar__starrating-item--active">
               <span>1</span>
               <MdOutlineStar />
            </button>
            <button className="sidebar__starrating-item">
               <span>2</span>
               <MdOutlineStar />
            </button>
            <button className="sidebar__starrating-item">
               <span>3</span>
               <MdOutlineStar />
            </button>
            <button className="sidebar__starrating-item">
               <span>4</span>
               <MdOutlineStar />
            </button>
            <button className="sidebar__starrating-item">
               <span>5</span>
               <MdOutlineStar />
            </button>
         </div>
      </div >
   )
}

export default Starrating