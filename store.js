import { configureStore } from '@reduxjs/toolkit'

import articlesReducer from './lib/slices/articlesSlice'
import customizationReducer from './lib/slices/customizationSlice'

export default configureStore({
  reducer: {
    articles: articlesReducer,
    customization: customizationReducer,
  },
  devTools: true,
})
