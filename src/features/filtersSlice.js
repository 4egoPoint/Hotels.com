
import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
   name: 'filters',
   initialState: {
      hotelName: "",
      sortBy: "",//type of sorting         
      likedOnly: false,
      minRating: 9.0,
      minPrice: 200,
      maxPrice: 201,
      showSale: false,//znygki skilki vdtsotkiv off
      paymentType: "",
      meals: {
         isBreakfastIncluded: false,
         isDinnerIncluded: false,
         isLunchIncluded: false,
      },
      amenities: {
         isPoolIncluded: false,
         isParkingIncluded: false,
         isWIFIIncluded: false,
      },
      hotelStars: [1,2,3],
   },
   reducers: {
      changeHotelNamePropery: (state, action) => {
         state.hotelName = action.payload
      },
   }
})


export const { changeHotelNamePropery } = filtersSlice.actions

export default filtersSlice.reducer