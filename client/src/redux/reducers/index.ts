import { combineReducers } from 'redux'
import productReducer from './Products'
import customerReducer from './Customer'
import orderReducer from './Orders'

const rootReducer = combineReducers({
  productReducer,
  customerReducer,
  orderReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer