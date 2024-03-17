

import "./checkoption.scss"

const Checkoption = ({ name, func}) => {

   return (
      <label onChange={()=> func()} className="container">
         {name}
         <input type="checkbox" />
         <span className="checkmark"></span>
      </label>
   )
}

export default Checkoption