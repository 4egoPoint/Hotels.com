
import { configureStore } from '@reduxjs/toolkit'
import roomsSlice from "../features/roomsSlice"
import filterSlice from "../features/filtersSlice"
import compareSlice from '../features/compareSlice'

export default configureStore({
   reducer: {
      roomsList: roomsSlice,
      filters: filterSlice,
      compare: compareSlice,
   }
})