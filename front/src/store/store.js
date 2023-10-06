import { configureStore} from '@reduxjs/toolkit'
import football_data_reducer from './reducers/football_data_reducer'

export default configureStore({
  reducer: {
    footballData: football_data_reducer
  }
})