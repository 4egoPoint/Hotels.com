

import Sidebar from "../sidebar/Sidebar"
import Filterscontrol from "./components/filterscontrol/Filterscontrol"
import Accomodation from "./components/accomodation/Accomodation"
import Sorting from "./components/sorting/Sorting"
import "./list.scss"
import { useSelector } from "react-redux"
import Comertial from "./components/comertial/Comertial"

const List = () => {
   const hotelsArr = useSelector(state => state.hotelsList)

   return (
      <div className="list">
         <div className="list__wrapper">
            <div className="list__box">
               <div className="list__sidebar">
                  <Sidebar />
               </div>
               <div className="list__list-column">
                  <Filterscontrol />
                  <div className="list__top-row">
                     <Accomodation />
                     <Sorting />
                  </div>
                  <Comertial />
                  <div className="list__list">
                     {
                        hotelsArr.map((item)=><div key={item.id}>asd</div>)
                     }
                  </div>
               </div>
            </div>
            <div className="list__holder"></div>
         </div>
      </div>
   )
}

export default List