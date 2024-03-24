

import { useEffect, useState } from "react";
import "./reserve.scss"
import 'react-calendar/dist/Calendar.css';
import Filters from "./filters/Filters";
import Beadroom from "./beadroom/Beadroom";



const Reserve = ({ minCostPerNight }) => {
   const roomsArr = [
      {
         id: 1,
         name: "Superior Room",
         beadName: "Double",
         sqm: 29,
         price: Math.round(minCostPerNight),
         img: "https://images.trvl-media.com/lodging/93000000/92980000/92975800/92975781/1f9649d9.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      },
      {
         id: 2,
         name: "Deluxe Room",
         beadName: "King",
         sqm: 35,
         price: Math.round(minCostPerNight * 1.6),
         img: "https://images.trvl-media.com/lodging/93000000/92980000/92975800/92975781/589114e3.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      },
      {
         id: 3,
         name: "Deluxe with View",
         beadName: "Queen",
         sqm: 39,
         price: Math.round(minCostPerNight * 2.2),
         img: "https://images.trvl-media.com/lodging/93000000/92980000/92975800/92975781/5cade17a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      },
   ]
   const [daysValue, setDaysValue] = useState(1)
   useEffect(()=>{},[daysValue])
   return (
      <div className='reserve'>
         <h2 className="reserve__headline"><span>Choose your room</span><div>{daysValue}{daysValue == 1 ? " day" : " days"}</div></h2>
         <Filters setDaysValue={setDaysValue} />
         <div className="reserve__rooms">
            {
               roomsArr.map(i => <Beadroom key={i.id} daysValue={daysValue} name={i.name} beadName={i.beadName} sqm={i.sqm} price={i.price} img={i.img} />)
            }
         </div>
      </div>
   )
}


export default Reserve