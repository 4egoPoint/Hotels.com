

import "./starrating.scss"
import { useState } from "react"
import { MdOutlineStar } from "react-icons/md";

const Starrating = () => {
   const [studio, setStudio] = useState(false)
   const [first, setFirst] = useState(false)
   const [seck, setSeck] = useState(false)
   const [third, setThird] = useState(false)
   const [fourth, setfourth] = useState(false)
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline" > Property class</div >
         <div className="sidebar__starrating">
            {
               studio ? (
                  <button onClick={() => setStudio(!studio)} className="sidebar__starrating-item sidebar__starrating-item--active">
                     <span>1</span>
                     <MdOutlineStar />
                  </button>
               ) : (
                  <button onClick={() => setStudio(!studio)} className="sidebar__starrating-item">
                     <span>1</span>
                     <MdOutlineStar />
                  </button>
               )
            }
            {
               first ? (
                  <button onClick={() => setFirst(!first)} className="sidebar__starrating-item sidebar__starrating-item--active">
                     <span>2</span>
                     <MdOutlineStar />
                  </button>
               ) : (
                  <button onClick={() => setFirst(!first)} className="sidebar__starrating-item">
                     <span>2</span>
                     <MdOutlineStar />
                  </button>
               )
            }
            {
               seck ? (
                  <button onClick={() => setSeck(!seck)} className="sidebar__starrating-item sidebar__starrating-item--active">
                     <span>3</span>
                     <MdOutlineStar />
                  </button>
               ) : (
                  <button onClick={() => setSeck(!seck)} className="sidebar__starrating-item">
                     <span>3</span>
                     <MdOutlineStar />
                  </button>
               )
            }
            {
               third ? (
                  <button onClick={() => setThird(!third)} className="sidebar__starrating-item sidebar__starrating-item--active">
                     <span>4</span>
                     <MdOutlineStar />
                  </button>
               ) : (
                  <button onClick={() => setThird(!third)} className="sidebar__starrating-item">
                     <span>4</span>
                     <MdOutlineStar />
                  </button>
               )
            }
            {
               fourth ? (
                  <button onClick={() => setfourth(!fourth)} className="sidebar__starrating-item sidebar__starrating-item--active">
                     <span>5</span>
                     <MdOutlineStar />
                  </button>
               ) : (
                  <button onClick={() => setfourth(!fourth)} className="sidebar__starrating-item">
                     <span>5</span>
                     <MdOutlineStar />
                  </button>
               )
            }
         </div>
      </div >
   )
}

export default Starrating