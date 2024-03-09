

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./sorting.scss"
import { useState } from "react";

const Sorting = () => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
   return (
      <div className='sorting'>
         <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="sorting__button">
            <div className="sorting__text">
               <h4>Sort by</h4>
               <span>Recomended</span>
            </div>
            <div className="sorting__icon">
               {
                  isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
               }
            </div>
         </button>
         {
            isDropdownOpen ? <ul></ul> : null
         }
         {isDropdownOpen ? <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="katalizator"></button> : null}
      </div>
   )
}

export default Sorting