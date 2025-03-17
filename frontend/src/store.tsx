import { configureStore } from '@reduxjs/toolkit'

import locationReducer from "./stores/location";

export default configureStore({
  reducer: {
    location: locationReducer
  },
})
