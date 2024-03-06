

import "../sidebar.scss"

const Radio = () => {
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline">Guest rating</div>
         <div className="sidebar__radio-box">
            <div className="sidebar__radio">
               <input type="radio" id="any" />
               <label for="any">Any</label>
            </div>
            <div className="sidebar__radio">
               <input type="radio" id="wonderful" />
               <label for="wonderful">Wonderful 9+</label>
            </div>
            <div className="sidebar__radio">
               <input type="radio" id="verygood" />
               <label for="verygood">Very good 8+</label>
            </div>
            <div className="sidebar__radio">
               <input type="radio" id="good" />
               <label for="good">Good 7+</label>
            </div>
         </div>
      </div>
   )
}

export default Radio