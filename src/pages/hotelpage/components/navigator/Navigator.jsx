

import { Link } from "react-router-dom"
import "./navigator.scss"

const Navigator = () => {
   return (
      <nav className='navigator'>
         <Link to="" className="navigator__item">Overview</Link>
         <Link to="" className="navigator__item">Amenities</Link>
         <Link to="" className="navigator__item">Rooms</Link>
         <Link to="" className="navigator__item">Accessibility</Link>
         <Link to="" className="navigator__item">Policies</Link>
      </nav>
   )
}

export default Navigator