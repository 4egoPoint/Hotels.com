

import "../sidebar.scss"

const Radio = () => {
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline">Guest rating</div>
         <div className="sidebar__radio-box">
            <div className="sidebar__radio">
               <input type="radio" id="any" name="readio-menu"/>
               Any
            </div>
            <div className="sidebar__radio">
               <input type="radio" id="wonderful" name="readio-menu"/>
               Wonderful 9+
            </div>
            <div className="sidebar__radio">
               <input type="radio" id="verygood" name="readio-menu"/>
               Very good 8+
            </div>
            <div className="sidebar__radio">
               <input type="radio" id="good" name="readio-menu"/>
               Good 7+
            </div>
         </div>
      </div>
   )
}

export default Radio