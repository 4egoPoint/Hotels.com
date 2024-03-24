

import { Link } from "react-router-dom"
import "./toprow.scss"
import { FaHeart, FaRegHeart, FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";

// kreacte liked system conected to db
const TopRow = ({id}) => {
   const [isLiked, setIsLiked] = useState(false)
   return (
      <div className="toprow">
         <Link className="toprow__link" to="/"><FaArrowLeftLong /><span>See all properties</span></Link>
         <button onClick={()=>setIsLiked(!isLiked)} className="toprow__like-button">
            {
               isLiked ? <FaHeart/>:<FaRegHeart/>
            }
            <span>save</span>
         </button>
      </div>
   )
}

export default TopRow