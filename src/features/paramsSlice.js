
import { createSlice } from '@reduxjs/toolkit'
let D = new Date()
console.log(new Date())
export const paramsSlice = createSlice({
   name: 'paramsSlice',
   initialState: {
      rooms: 1,
      city: "warsaw",
      minDate: "",
      minDateR: "",
      maxDate: "",
      maxDateR: "",
      days: 1,
   },
   reducers: {
      changeMinDate: (state, action) => {
         let day = action.payload.day ==31 ? 1 : action.payload.day
         let month = action.payload.day == 31 ? 3 : action.payload.month
         state.minDate = action.payload.date
         state.minDateR = month + "/" + day + "/" + action.payload.year
      },
      changeMaxDate: (state, action) => {
         state.maxDate = action.payload.date
         state.maxDateR = action.payload.month + "/" + action.payload.day + "/" + action.payload.year
      },
      changeDays: (state, action) => {
         state.days = action.payload
      }
   }
})


export const { changeMinDate, changeMaxDate, changeDays } = paramsSlice.actions

export default paramsSlice.reducer