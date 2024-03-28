

import { Link } from "react-router-dom"
import "./header.scss"

const Nav = ({ navType, name, link, route, isSignInOpen, setIsSignInOpen }) => {
   if (navType === "link") {
      return (
         <a target="_blanc"  href={link} className='link'>{name}</a>
      )
   }
   if (navType === "route") {
      return (
         <Link target="_blanc" to={route} className="route">{name}</Link>
      )
   }
   if (navType === "element") {
      return (
         <>
            <div className="element">
               <button onClick={() => setIsSignInOpen(!isSignInOpen)} className="element__name">{name}</button>
               {isSignInOpen ? <div className="sign">
                  <h3>Members save 10% or more on over 100,000 hotels worldwide when you're signed in</h3>
                  <button className="element__btn-blue">Sign in</button>
                  <button className="element__btn">Sign up, it's free</button>
               </div> : null}
            </div>
            {isSignInOpen ? <button onClick={() => setIsSignInOpen(false)} className="katalizator"></button> : null}
         </>
      )
   }
}

export default Nav