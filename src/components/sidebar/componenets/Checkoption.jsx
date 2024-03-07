

import React from 'react'

const Checkoption = ({ name, func}) => {
   console.log(typeof(func))
   return (
      <label onChange={()=> func()} className="container">
         {name}
         <input type="checkbox" />
         <span className="checkmark"></span>
      </label>
   )
}

export default Checkoption