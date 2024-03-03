

import Sidebar from "../sidebar/Sidebar"
import "./list.scss"
import { useSelector } from "react-redux"

const List = () => {
   const roomsArr = useSelector(state=> state.roomsList)
   console.log(roomsArr)
   return (
      <div className="list">
         <div className="list__wrapper">
            <div className="list__box">
               <div className="list__sidebar"><Sidebar /></div>
               <div className="list__list">
                  <div className="list__news">asd</div>
               </div>
            </div>
            <div className="list__holder"></div>
         </div>
      </div>
   )
}

export default List