

import "./price.scss"
import { useSelector, useDispatch } from "react-redux"
import { changeMinPrice, changeMaxPrice } from "../../../../features/filtersSlice"
import { useEffect, useState } from "react"

const Price = () => {
   const hotelsFilters = useSelector(state => state.filters)
   const dispatch = useDispatch()
   const [minValue, setMinValue] = useState(0)
   const [maxValue, setMaxValue] = useState(0)
   useEffect(() => {
      setMinPrice()
      setMinPrice()
   }, [hotelsFilters.minPrice, hotelsFilters.maxPrice])
   const setMinPrice = (event) => {
      event?.preventDefault()
      dispatch(changeMinPrice(+minValue))
      if (minValue > maxValue) setMaxValue(+minValue + 1)
   }
   const setMaxPrice = (event) => {
      event?.preventDefault()
      dispatch(changeMaxPrice(+maxValue))
      if (minValue > maxValue) setMinValue(+maxValue - 1)
   }
   const focusOnInput = (idName) => {
      document.getElementById(idName).focus();
      return false;
   }
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline">Total price</div>
         <div className="sidebar__price">
            <form onSubmit={(event) => setMinPrice(event)} className="sidebar__range" onClick={() => focusOnInput("input2")}>
               <h4>Min</h4>
               <input onChange={(event) => setMinValue(event.target.value)} id="input2" value={minValue === 0 ? "" : minValue} type="number" placeholder="$100"></input>
            </form>
            <form onSubmit={(event) => setMaxPrice(event)} className="sidebar__range" onClick={() => focusOnInput("input3")}>
               <h4 >Max</h4>
               <input onChange={(event) => setMaxValue(event.target.value)} id="input3" type="number" value={maxValue === 0 ? "" : maxValue} placeholder="$100"></input>
            </form>
         </div>
      </div>
   )
}

export default Price