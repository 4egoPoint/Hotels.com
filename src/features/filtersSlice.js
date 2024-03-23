
import { createSlice } from '@reduxjs/toolkit'

export const filtersSlice = createSlice({
   name: 'filters',
   initialState: {
      hotelName: "",
      sortBy: "",//type of sorting         
      likedOnly: false,
      minRating: 9.0,
      minPrice: 0,
      maxPrice: 0,
      isPriceSeted: false,
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
      hotelStars: [1, 2, 3],
      tempraryArr: [],
      dm: {
         isRental: false,
         isGuesthouse: false,
         isHotel: false,
         isKing: false,
         isQueen: false,
         isDouble: false,
      }
   },
   reducers: {
      changeHotelNamePropery: (state, action) => {
         state.hotelName = action.payload
      },
      changeFilterSetings: (state, action) => {
         if (action.payload.type == "break") state.meals.isBreakfastIncluded = !state.meals.isBreakfastIncluded
         if (action.payload.type === "dinn") state.meals.isDinnerIncluded = !state.meals.isDinnerIncluded
         if (action.payload.type === "lunch") state.meals.isLunchIncluded = !state.meals.isLunchIncluded
         if (action.payload.type === "pool") state.amenities.isPoolIncluded = !state.amenities.isPoolIncluded
         if (action.payload.type === "park") state.amenities.isParkingIncluded = !state.amenities.isParkingIncluded
         if (action.payload.type === "liked") state.likedOnly = !state.likedOnly
         if (action.payload.type === "rent") state.dm.isRental = !state.dm.isRental
         if (action.payload.type === "guest") state.dm.isGuesthouse = !state.dm.isGuesthouse
         if (action.payload.type === "hotel") state.dm.isHotel = !state.dm.isHotel
         if (action.payload.type === "king") state.dm.isKing = !state.dm.isKing
         if (action.payload.type === "queen") state.dm.isQueen = !state.dm.isQueen
         if (action.payload.type === "double") state.dm.isDouble = !state.dm.isDouble
      },
      changeMinPrice: (state, action) => {
         if (state.minPrice >= 0 && action.payload > state.maxPrice) {
            state.minPrice = action.payload
            state.maxPrice = action.payload + 1
            console.log(state.minPrice)
         }
         if (state.minPrice >= 0 && state.minPrice < state.maxPrice) state.minPrice = action.payload
      },
      changeMaxPrice: (state, action) => {
         if (state.minPrice >= 0 && state.minPrice > state.maxPrice) {
            state.minPrice = action.payload
            state.maxPrice = action.payload + 1
         }
         if (state.minPrice >= 0 && state.minPrice < action.payload) state.maxPrice = action.payload
      },
   }
})


export const { changeHotelNamePropery, changeFilterSetings, changeMinPrice, changeMaxPrice, setIDSolution } = filtersSlice.actions

export default filtersSlice.reducer