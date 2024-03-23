

import { createSlice } from '@reduxjs/toolkit'
const initialState = {
   id: "",
   hotelName: "",
   hotelPreDescription: "",
   hotelImages: ["","","","","",],
   hotelRating: 0,//rating from 1 to 10
   minCostPerNight: 0,
   priceOff: 0,
   paymentType: "Reserve now, pay later",
   hotelDescription: "",
   hotelStarsCounter: 5,
   hotelReviews: 0,
   meals: {
      isBreakfastIncluded: true,
      isDinnerIncluded: false,
      isLunchIncluded: false,
   },
   amenities: {
      isPoolIncluded: false,
      isParkingIncluded: true,
      isWIFIIncluded: false,
   }
}



export const hotelpageSlice = createSlice({
   name: "hotelpage",
   initialState,
   reducers: {
      setHotelPage: (state, action) => {
         state.id = action.payload.id
         state.hotelName = action.payload.hotelName
         state.hotelImages[0] = action.payload.hotelImages[0]
         state.hotelImages[1] = action.payload.hotelImages[1]
         state.hotelImages[2] = action.payload.hotelImages[2]
         state.hotelImages[3] = action.payload.hotelImages[3]
         state.hotelImages[4] = action.payload.hotelImages[4]
         state.hotelRating = action.payload.hotelRating
         state.minCostPerNight = action.payload.minCostPerNight
         state.priceOff = action.payload.priceOff
         state.hotelDescription = action.payload.hotelDescription
         state.hotelStarsCounter = action.payload.hotelStarsCounter
         state.hotelReviews = action.payload.hotelReviews
      }
   },
})

export const { setHotelPage } = hotelpageSlice.actions

export default hotelpageSlice.reducer