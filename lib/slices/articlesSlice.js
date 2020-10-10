import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { getUniqueId, findIndex } from '../utils'

const api = 'https://wt-de5185b3aba378f7c2ad6d815fe055d2-0.sandbox.auth0-extend.com/news-api-get-headlines'

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(api)
      return response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    emotions: {},
    loading: 'idle',
  },
  reducers: {
    setEmotion: (state, {payload}) => {
      state.emotions[payload.articleId] = payload.emotionId
    },
    deleteArticle: (state, {payload}) => {
      const index = findIndex(state.articles, payload.articleId)
      state.articles.splice(index, 1)
    }
  },
  extraReducers: {
    [fetchArticles.pending]: (state) => {
      state.articles = []
      state.loading = 'loading'
    },
    [fetchArticles.fulfilled]: (state, action) => {
      state.articles = action.payload.articles.map(mapArticles)
      state.loading = 'loaded'
    },
    [fetchArticles.rejected]: (state, action) => {
      state.loading = 'error'
      state.error = action.payload.error
    },
  },
})

/* add an unique id since articles come without it */
const mapArticles = article => {
  return {
    ...article,
    id: getUniqueId()
  }
}

// selectors needed for "selectArticles"
const articlesSelector = state => state.articles.articles
const emotionsSelector = state => state.articles.emotions

// memoized selector to combine articles with emotions
// and separate this logic from the view.
export const selectArticles = createSelector(
  articlesSelector,
  emotionsSelector,
  (articles, emotions) => {
    return articles.map(article => {
      return {
        ...article,
        emotion: emotions[article.id]
      }
    })
  }
)

export const {
  setEmotion,
  deleteArticle
} = articlesSlice.actions

export default articlesSlice.reducer