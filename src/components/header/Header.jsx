

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./header.scss"
import { useState } from "react";

const routesArr = []

const Header = () => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
   return (
      <div className="header">
         <div className="header__wrapper">
            <div className="header__logo-bar">
               <h1 className="header__logo">Hotels<span>.com</span></h1>
               <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="header__dropdown">Shop travel {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</button>
               {
                  !isDropdownOpen ? <></> : <ul className="header__droped-menu">
                     <li>Groups & meetings</li>
                     <li>Hotels.com Rewards</li>
                  </ul>
               }
            </div>
            <div className="header__row">
               <div className="header__get-app"></div>
               <div className="header__route"></div>
            </div>
         </div>
      </div>
   )
}

export default Header