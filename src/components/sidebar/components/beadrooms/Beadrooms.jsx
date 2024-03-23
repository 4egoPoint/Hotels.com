

// import "./beadrooms.scss"

import { useState } from "react"

const Beadrooms = () => {
   const [studio, setStudio] = useState(false)
   const [first, setFirst] = useState(false)
   const [seck, setSeck] = useState(false)
   const [third, setThird] = useState(false)
   const [fourth, setfourth] = useState(false)
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline" >Number of bedrooms</div >
         <div className="sidebar__starrating">
            {
               studio ? (
                  <button onClick={()=>setStudio(!studio)} className="sidebar__starrating-item sidebar__starrating-item--active"><div>Studio</div></button>
               ) : (
                  <button onClick={()=>setStudio(!studio)} className="sidebar__starrating-item"><div>Studio</div></button>
               )
            }
            {
               first ? (
                  <button onClick={()=>setFirst(!first)} className="sidebar__starrating-item sidebar__starrating-item--active"><div>1</div></button>
               ) : (
                  <button onClick={()=>setFirst(!first)} className="sidebar__starrating-item"><div>1</div></button>
               )
            }
            {
               seck ? (
                  <button onClick={()=>setSeck(!seck)} className="sidebar__starrating-item sidebar__starrating-item--active"><div>2</div></button>
               ) : (
                  <button onClick={()=>setSeck(!seck)} className="sidebar__starrating-item"><div>2</div></button>
               )
            }
            {
               third ? (
                  <button onClick={()=>setThird(!third)} className="sidebar__starrating-item sidebar__starrating-item--active"><div>3</div></button>
               ) : (
                  <button onClick={()=>setThird(!third)} className="sidebar__starrating-item"><div>3</div></button>
               )
            }
            {
               fourth ? (
                  <button onClick={()=>setfourth(!fourth)} className="sidebar__starrating-item sidebar__starrating-item--active"><div>4</div></button>
               ) : (
                  <button onClick={()=>setfourth(!fourth)} className="sidebar__starrating-item"><div>4</div></button>
               )
            }
         </div>
      </div >
   )
}

export default Beadrooms