

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import "./header.scss"
import { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import { FaArrowRight } from "react-icons/fa";

const routesArr = [
   {
      id: 1,
      navType: "route",
      name: "List your property",
      link: "",
      route: "/property",
   },
   {
      id: 2,
      navType: "route",
      name: "Support",
      link: "",
      route: "/support",
   },
   {
      id: 3,
      navType: "link",
      name: "Trips",
      link: "/trips",
      route: "/trips",
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
   const [isSignInOpen, setIsSignInOpen] = useState(false)
   return (
      <div className="header">
         <div className="header__wrapper">
            <div className="header__logo-bar">
               <Link to="/" className="header__logo">Hotels<span>.com</span></Link>
               <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="header__dropdown">Shop travel {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</button>
               {
                  isDropdownOpen ? <ul className="header__droped-menu">
                     <li onClick={() => setIsDropdownOpen(false)}>Groups & meetings</li>
                     <li onClick={() => setIsDropdownOpen(false)}>Hotels.com Rewards</li>
                  </ul> : null
               }
            </div>
            {isDropdownOpen ? <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="katalizator"></button> : null}
            <div className="header__row">
               <Link to="/getapp" className="header__get-app"><IoMdDownload /><span>Get the app</span></Link>
               <nav className="header__nav">
                  {
                     routesArr.map((item) => <Nav key={item.id}
                        navType={item.navType}
                        name={item.name}
                        link={item.link}
                        route={item.route}
                        isSignInOpen={isSignInOpen}
                        setIsSignInOpen={setIsSignInOpen} />)
                  }
               </nav>
            </div>
            <div className="katalizator__menu">
               <Menu width={"100%"}>
                  {
                     routesArr.map(i => <a target="_blank" className="a" key={i.id} href={i.route}><FaArrowRight /><span>{i.name}</span></a>)
                  }
               </Menu>
            </div>
         </div>
      </div>
   )
}

export default Header