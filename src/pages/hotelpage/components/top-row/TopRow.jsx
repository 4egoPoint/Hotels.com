

import { Link } from "react-router-dom"
import "./toprow.scss"
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const TopRow = () => {
   // console.log(isLiked, "prop")
   return (
      <div className="toprow">
         <Link className="toprow__link" to="/">See all properties</Link>
         <button className="toprow__like-button">
         </button>
      </div>
   )
}

export default TopRow