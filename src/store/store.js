import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import carModelReducer from "./carModelReducer"
import locationReducer from "./locationReducer"

const reducers = combineReducers({
  location: locationReducer,
  model: carModelReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
