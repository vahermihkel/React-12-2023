import { createSlice } from '@reduxjs/toolkit'

export const cartSumSlice = createSlice({
  name: 'cartSum',
  initialState: {
    value: 0, totalItems: 0
  },
  reducers: {
    initialize: (state, action) => {
      state.value = action.payload
    },
    empty: state => {
      state.value = 0
    },
    add: (state, action) => {
      state.value += action.payload
    },
    remove: (state, action) => {
      state.value -= action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { initialize, empty, add, remove } = cartSumSlice.actions

export default cartSumSlice.reducer