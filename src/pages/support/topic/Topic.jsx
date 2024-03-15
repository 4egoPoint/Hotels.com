

import { useState } from "react";
import "./topic.scss"
import { RiArrowDownDoubleFill } from "react-icons/ri";

const Topic = ({ title, text }) => {
   const [isReacted, setIsReacted] = useState(false)
   return (
      <div className='topic'>
         <div className="topic__title"><RiArrowDownDoubleFill />{title}</div>
         <div className="topic__text">{text}</div>
         <div className="topic__feedback">
            {
               !isReacted ? (
                  <>
                  <h3>Was this article helpful?</h3>
                  <div>
                     <button onClick={()=>setIsReacted(!isReacted)}>Yes</button>
                     <button onClick={()=>setIsReacted(!isReacted)}>No</button>
                  </div>
                  </>
               ) : (
                  <h3>Thank you for your feedback</h3>
               )
            }
         </div>
      </div>
   )
}

export default Topic