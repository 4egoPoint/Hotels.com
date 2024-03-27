

import "./accessibility.scss"
import { FaDoorOpen, FaRegBuilding } from "react-icons/fa";

const Accessibility = () => {
   return (
      <div className='accessibility'>
         <div className="accessibility__main">
            <div className="accessibility__main-title">Accessibility</div>
            <div className="accessibility__main-text">If you have requests for specific accessibility needs, please contact the property using the information on the reservation confirmation received after booking.</div>
         </div>
         <div className="accessibility__box">
            <div className="accessibility__block">
               <div className="accessibility__headline"><FaRegBuilding /><span>Common areas</span></div>
               <p>Wheelchair accessible (may have limitations)</p>
               <p>Accessible parking space</p>
               <p>Hardwood flooring in public areas</p>
               <p>Lift (90 centimetre wide door)</p>
               <p>Smooth flooring in public areas</p>
               <p>Stair-free path to entrance</p>
               <p>Tile flooring in public areas</p>
               <p>Wheelchair-accessible concierge desk</p>
               <p>Wheelchair-accessible lounge</p>
               <p>Wheelchair-accessible public washroom</p>
               <p>Wheelchair-accessible registration desk (91 centimetre high)</p>
               <p>Wheelchair-accessible restaurant</p>
            </div>
            <div className="accessibility__block">
               <div className="accessibility__headline"><FaDoorOpen /><span>Rooms</span></div>
               <p>Bathroom emergency pull cord</p>
               <p>Grab bar near toilet (80 centimetre high)</p>
               <p>Hardwood flooring in room</p>
               <p>Magnifying mirror</p>
               <p>Thin carpet in room</p>
               <p>Visual fire alarm</p>
               <p>Wheelchair-accessible bathroom vanity (70 centimetre high)</p>
            </div>
         </div>
      </div>
   )
}

export default Accessibility