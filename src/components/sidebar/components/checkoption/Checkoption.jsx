
import { useSelector, useDispatch } from "react-redux"
import { changeFilterSetings } from "../../../../features/filtersSlice"
import "./checkoption.scss"
import { useState } from "react"

const Checkoption = ({ name, type }) => {
   const dispatch = useDispatch()
   // const hotelsFilters = useSelector(state => state.filters)
   const a = () => { 
      dispatch(changeFilterSetings({type: type,}))
   }
   return (
      <label onChange={() => a() } className="container">
         {name}
         <input type="checkbox" />
         <span className="checkmark"></span>
      </label>
   )
}

export default Checkoption