

import React from 'react'
import Checkoption from "./Checkoption";

const Filtergrup = ({headline, arr}) => {
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline">{headline}</div>
         <div className="sidebar__box">
            {
               arr.map((item) => <Checkoption key={item.id} name={item.name} func={item.func} />)
            }
         </div>
      </div>
   )
}

export default Filtergrup