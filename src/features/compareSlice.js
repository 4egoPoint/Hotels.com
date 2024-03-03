
import { createSlice } from '@reduxjs/toolkit'

export const compareSlice = createSlice({
   name: 'compare',
   initialState: [],
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


export const { increment, decrement, incrementByAmount } = compareSlice.actions

export default compareSlice.reducer