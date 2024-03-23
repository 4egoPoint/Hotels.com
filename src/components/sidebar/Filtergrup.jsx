

import React from 'react'
import Checkoption from "./components/checkoption/Checkoption";
import { useSelector, useDispatch } from "react-redux"

const Filtergrup = ({headline, arr}) => {
   const hotelsFilters = useSelector(state => state.filters)
   // console.log(hotelsFilters.meals)
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline">{headline}</div>
         <div className="sidebar__box">
            {
               arr.map((item) => <Checkoption key={item.id} name={item.name} type={item.type} />)
            }
         </div>
      </div>
   )
}

export default Filtergrup