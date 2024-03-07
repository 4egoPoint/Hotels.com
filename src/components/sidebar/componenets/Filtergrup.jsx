

import React from 'react'

const Filtergrup = () => {
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline">Popular filters</div>
         <div className="sidebar__box">
            {
               paymentFilters.map((item) => <Checkoption key={item.id} name={item.name} func={item.func} />)
            }
         </div>
      </div>
   )
}

export default Filtergrup