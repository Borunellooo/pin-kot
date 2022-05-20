import { combineReducers } from 'redux'
import { reducerPost } from './reducerBD'
import { favouritesReducer } from './favouritesReducer'

const rootReducer = combineReducers({
  list: reducerPost,
  favouritesId: favouritesReducer,
})

export default rootReducer
