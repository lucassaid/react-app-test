import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { selectRandom } from '../utils'

const api = 'https://5f8205dc0695720016433121.mockapi.io/customization'

/*
* Call this function to fetch customization from the above api.
* The result will be added to redux store.
*/
export const fetchCustomization = createAsyncThunk(
  'customization/fetchCustomization',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(api)
      return response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const customizationSlice = createSlice({
  name: 'customization',
  initialState: {
    customization: {},
    loading: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchCustomization.pending]: (state) => {
      state.customization = {}
      state.loading = 'loading'
    },
    [fetchCustomization.fulfilled]: (state, action) => {
      state.customization = action.payload[0]
      state.loading = 'loaded'
    },
    [fetchCustomization.rejected]: (state, action) => {
      state.loading = 'error'
      state.error = action.payload.error
    },
  },
})

export const loadingStateSelector = state => state.customization.loading
export const selectCustomization = state => state.customization.customization

export default customizationSlice.reducer