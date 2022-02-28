import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import locationReducer from "./locationReducer"

const reducers = combineReducers({
  location: locationReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
