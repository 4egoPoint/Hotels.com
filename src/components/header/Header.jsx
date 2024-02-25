

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import "./header.scss"
import { useState } from "react";
import Nav from "./Nav";

const routesArr = [
   {
      id: 1,
      navType: "link",
      name: "List your property",
      link: "",
      route: "",
   },
   {
      id: 2,
      navType: "route",
      name: "Support",
      link: "",
      route: "",
   },
   {
      id: 3,
      navType: "route",
      name: "Tips",
      link: "",
      route: "",
   },
   {
      id: 4,
      navType: "element",
      name: "Sign in",
      link: "",
      route: "",
   }, 
]

const Header = () => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
   const [isSignInOpen, setIsSignInOpen] = useState(true)
   return (
      <div className="header">
         <div className="header__wrapper">
            <div className="header__logo-bar">
               <h1 className="header__logo">Hotels<span>.com</span></h1>
               <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="header__dropdown">Shop travel {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</button>
               {
                  isDropdownOpen ? <ul className="header__droped-menu">
                     <li>Groups & meetings</li>
                     <li>Hotels.com Rewards</li>
                  </ul> : null
               }
            </div>
            {isDropdownOpen ? <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="katalizator"></button> : null}
            <div className="header__row">
               <button className="header__get-app"><IoMdDownload  /><span>Get the app</span></button>
               <nav className="header__nav">
                  {
                     routesArr.map((item)=> <Nav key={item.id} 
                     navType={item.navType} 
                     name={item.name} 
                     link={item.link} 
                     route={item.route}
                     isSignInOpen={isSignInOpen}
                     setIsSignInOpen={setIsSignInOpen}  />)
                  }
               </nav>
            </div>
         </div>
      </div>
   )
}

export default Header