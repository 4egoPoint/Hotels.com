

import "./amenities.scss"
import { IoIosSnow, } from "react-icons/io";
import { MdOutlinePets, MdOutlineRestaurant, MdOutlineWifi, MdLocalBar } from "react-icons/md";
import { FaCar, } from "react-icons/fa6";

const oneArr = [
   {
      text: "Pet-friendly",
      element: <MdOutlinePets />
   },
   {
      text: "Air conditioning",
      element: <IoIosSnow />
   },
   {
      text: "Restaurant",
      element: <MdOutlineRestaurant />
   },
]
const twoArr = [
   {
      text: "Free WiFi",
      element: <MdOutlineWifi />
   },
   {
      text: "Parking available",
      element: <FaCar />
   },
   {
      text: "Bar",
      element: <MdLocalBar />
   },
]
const Amenities = () => {
   return (
      <div className="info__amenities amenities">
         <h2 className="amenities__headline">Popular amenities</h2>
         <div className="amenities__block">
            <div className="amenities__col">
               {
                  oneArr.map(i => <div className="amenities__item">
                     {i.element}
                     <h5>{i.text}</h5>
                  </div>
                  )
               }
            </div>
            <div className="amenities__col">
               {
                  twoArr.map(i => <div className="amenities__item">
                     {i.element}
                     <h5>{i.text}</h5>
                  </div>
                  )
               }
            </div>
         </div>
      </div>
   )
}

export default Amenities