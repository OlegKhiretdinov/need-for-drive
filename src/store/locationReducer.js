import { getCityList } from "../api/request"

const SET_CITY = "SET_CITY"
const SET_CITY_LIST = "SET_CITY_LIST"
const SET_POINT = "SET_POINT"
const SET_POINT_LIST = "SET_POINT_LIST"

const initialState = {
  city: {},
  cityList: [],
  point: {},
  pointList: [],
}

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.city }
    case SET_CITY_LIST:
      return { ...state, cityList: action.cityList }
    case SET_POINT:
      return { ...state, point: action.point }
    case SET_POINT_LIST:
      return { ...state, pointList: action.pointList }
    default:
      return state
  }
}

const setCityListData = (cityList) => ({
  type: SET_CITY_LIST,
  cityList,
})

export const setCity = (city) => ({
  type: SET_CITY,
  city,
})

// const setPointList = (pointList) => ({
//   type: SET_POINT_LIST,
//   pointList,
// })

// const setPoint = (point) => ({
//   type: SET_POINT,
//   point,
// })

export const setCityList = () => async (dispatch) => {
  const cityList = await getCityList()
  dispatch(setCityListData(cityList.data))
}

export default locationReducer
