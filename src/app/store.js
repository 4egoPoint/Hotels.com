
import { configureStore } from '@reduxjs/toolkit'
import hotelsSlice from "../features/hotelsSlice"
import filterSlice from "../features/filtersSlice"
import compareSlice from '../features/compareSlice'
import hotelpage from "../features/hotelpageSlice"

export default configureStore({
   reducer: {
      hotelsList: hotelsSlice,
      hotelPage: hotelpage,
      filters: filterSlice,
      compare: compareSlice,
   }
})