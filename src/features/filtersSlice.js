
import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
   name: 'filters',
   initialState: {
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
      increment: state => {
         state.value += 1
      },
      decrement: state => {
         state.value -= 1
      },
      incrementByAmount: (state, action) => {
         state.value += action.payload
      }
   }
})


export const { increment, decrement, incrementByAmount } = filtersSlice.actions

export default filtersSlice.reducer