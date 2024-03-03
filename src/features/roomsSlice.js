

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
   {
      id: 1,
      isLiked: false,
      hotelName: "",
      hotelImages: [""],
      hotelRating: 9.2,//rating from 1 to 10
      minCostPerNight: 200,
      hotelDescription: "",
      hotelStarsCounter: 4,
      hotelRoomsArr: [],
      hotelReviews: 10,
      meals: {
         isBreakfastIncluded: false,
         isDinnerIncluded: false,
         isLunchIncluded:false,
      },
      amenities: {
         isPoolIncluded: false,
         isParkingIncluded: false,
         isWIFIIncluded: false,
      }
   },
]

export const roomsSlice = createSlice({
   name: 'roomsList',
   initialState,
   reducers: {
      changeLikedValue: (state, action) => {
         state.roomsList.map(item => item.id === action.id ? !item.isLiked : item.isLiked)
         state.value += action.payload
      }
   }
})


export const { changeLikedValue } = roomsSlice.actions

export default roomsSlice.reducer