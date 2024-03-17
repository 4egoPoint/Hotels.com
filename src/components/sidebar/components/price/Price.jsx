

import "./price.scss"

const Price = () => {
   const focusOnInput = (idName) => {
      document.getElementById(idName).focus(); 
      return false;
   }
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline">Total price</div>
         <div className="sidebar__price">
            <div className="sidebar__range" onClick={() => focusOnInput("input2")}>
               <h4>Min</h4>
               <input id="input2" type="text" placeholder="$100"></input>
            </div>
            <div className="sidebar__range" onClick={() => focusOnInput("input3")}>
               <h4 >Max</h4>
               <input id="input3" type="text" placeholder="$100"></input>
            </div>
         </div>
      </div>
   )
}

export default Price