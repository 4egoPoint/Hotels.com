
import { configureStore } from '@reduxjs/toolkit'
import hotelsSlice from "../features/hotelsSlice"
import filterSlice from "../features/filtersSlice"
import compareSlice from '../features/compareSlice'

export default configureStore({
   reducer: {
      hotelsList: hotelsSlice,
      filters: filterSlice,
      compare: compareSlice,
   }
})