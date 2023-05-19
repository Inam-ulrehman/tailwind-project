import samplesSlice from '@/feature/samples/samplesSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    samples: samplesSlice,
  },
})

export default store
