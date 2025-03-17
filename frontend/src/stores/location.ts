import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    currentLocation: null,
    currentLongitude: null,
    currentLatitude: null
  },
  reducers: {
    updateLocation: (state, action) => {
      state.currentLocation = action.payload.currentLocation
      state.currentLongitude = action.payload.currentLongitude
      state.currentLatitude = action.payload.currentLatitude
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateLocation } = locationSlice.actions

export default locationSlice.reducer