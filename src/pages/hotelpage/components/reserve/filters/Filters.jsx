
import { changeMinDate, changeMaxDate, changeDays } from "../../../../../features/paramsSlice"
import { useEffect, useState } from "react";
import "./filters.scss"
import Calendar from 'react-calendar';
import { FaCalendarDay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux"


const Filters = ({ setDaysValue }) => {
   const [isCalendarIn, setIsCalendarIn] = useState(false)
   const params = useSelector(state => state.params)
   const dispatch = useDispatch()
   const adaptDate = (prop) => {
      return { date: prop.toString(), month: prop.getMonth().toString(), day: prop.getDate().toString(), year: prop.getFullYear().toString() }
   }
   const fixi = () => {
      let str = params.minDateR.split("/")
      str[0] == 31 ? str[0] = 1 : str[0] = +str[0] + 1
      str[1] = +str[1] + 1
      return str.join('/')
   }
   useEffect(() => {
      const date = new Date()
      dispatch(changeMinDate(adaptDate(date)))
      dispatch(changeMaxDate(adaptDate(date)))
   }, [])
   if (new Date(params.minDate) > new Date(params.maxDate)) {
      dispatch(changeMaxDate(adaptDate(new Date(fixi(params.minDateR)))))
   }
   const changeDaysNum = () => {
      let date1 = new Date(params.minDateR);
      let date2 = new Date(params.maxDateR);
      let DifferenceInTime =
         date2.getTime() - date1.getTime();
      let DifferenceInDays = Math.round(DifferenceInTime / (1000 * 3600 * 24));
      DifferenceInDays = DifferenceInDays == 0 ? 1 : DifferenceInDays
      setDaysValue(DifferenceInDays)
   }
   const setFirstCalendar = (prop) => {
      dispatch(changeMinDate(adaptDate(prop)))
      // setIsCalendarIn(!isCalendarIn)
   }
   const setSeckCalendar = (prop) => {
      dispatch(changeMaxDate(adaptDate(prop)))
      // setIsCalendarOut(!isCalendarOut)
   }
   const handleDate = (prop) => {
      let arr = prop.split("/")
      switch (arr[0]) {
         case "1":
            return arr[1] + " Jan"
         case "2":
            return arr[1] + " Feb"
         case "3":
            return arr[1] + " Mar"
         case "4":
            return arr[1] + " Apr"
         case "5":
            return arr[1] + " May"
         case "6":
            return arr[1] + " Jun"
         case "7":
            return arr[1] + " Jul"
         case "8":
            return arr[1] + " Aug"
         case "9":
            return arr[1] + " Sep"
         case "10":
            return arr[1] + " Oct"
         case "11":
            return arr[1] + " Nov"
         case "12":
            return arr[1] + " Dec"
      }
   }
   return (
      <div className='filters'>
         {
            isCalendarIn ? <button className="filters__caledar">
               <div className="filters__box">
                  <div className="filters__top"><button onClick={() => setIsCalendarIn(false)}><IoMdClose /></button></div>
                  <div className="filters__row">
                     <Calendar
                        minDate={new Date()}
                        defaultValue={params.minDate}
                        onChange={setFirstCalendar}
                        value={params.minDate}
                     />
                     <Calendar
                        minDate={new Date(fixi())}
                        defaultValue={params.maxDate}
                        onChange={setSeckCalendar}
                        value={params.maxDate}
                     />
                  </div>
               </div>
            </button> : null
         }
         <button onClick={() => setIsCalendarIn(!isCalendarIn)} className="filters__item">
            <div className="filters__icon"><FaCalendarDay /></div>
            <div className="filters__text">
               <div className="filters__headline">Check-in</div>
               <div className="filters__value">{handleDate(params.minDateR)}</div>
            </div>
         </button>
         <button onClick={() => setIsCalendarIn(!isCalendarIn)} className="filters__item">
            <div className="filters__icon"><FaCalendarDay /></div>
            <div className="filters__text">
               <div className="filters__headline">Check-out</div>
               <div className="filters__value">{handleDate(params.maxDateR)}</div>
            </div>
         </button>
         {changeDaysNum()}
      </div>
   )
}

//<Calendar minDate={new Date()} onChange={setCalendarValue} value={calendarValue}/>
export default Filters