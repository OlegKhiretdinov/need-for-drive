import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import carModelReducer from "./carModelReducer"
import locationReducer from "./locationReducer"
import orderOptionsReducer from "./orderOptionsReducer"

const reducers = combineReducers({
  location: locationReducer,
  model: carModelReducer,
  options: orderOptionsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
