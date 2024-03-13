
import { IoMdArrowDropright } from "react-icons/io";
import "./trips.scss"

const Trips = () => {
   return (
      <div className='trips'>
         <h2>Trips</h2>
         <img src="https://a.travel-assets.com/egds/illustrations/uds-default/unlock__large.svg"/>
         <button>Sign in or create new account</button>
         <div className="trips__option">
            <div className="trips__content">
               <h4>Don't have an account?</h4>
               <p>Use your initerary number and email to find a booking</p>
            </div>
            <div className="trips__ico"><IoMdArrowDropright /></div>
         </div>
      </div>
   )
}

export default Trips