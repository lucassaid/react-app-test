import { configureStore } from '@reduxjs/toolkit'

import articlesReducer from './lib/slices/articlesSlice'

export default configureStore({
  reducer: {
    articles: articlesReducer,
  },
  devTools: true,
})
