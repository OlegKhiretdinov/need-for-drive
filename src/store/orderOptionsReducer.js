import { rateQuery } from "../api/request"
import { defaultCarColor } from "../utils/const"

const SET_COLOR = "SET_COLOR"
const SET_CAR_COLORS = "SET_CAR_COLORS"
const SET_RATES = "SET_RATES"
const SET_RATE = "SET_RATE"
const SET_FUL_TANK = "SET_FUL_TANK"
const SET_CHILD_CHAIR = "SET_CHILD_CHAIR"
const SET_RIGHT_WHEEL = "SET_RIGHT_WHEEL"
const SET_DATE_FROM = "SET_DATE_FROM"
const SET_DATE_TO = "SET_DATE_TO"
const SET_PRICE = "SET_PRICE"

const initialState = {
  carColors: [defaultCarColor],
  color: defaultCarColor,
  dateFrom: 0,
  dateTo: 0,
  rateId: {},
  rates: [],
  price: 0,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
}

const orderOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, color: action.color }
    case SET_CAR_COLORS:
      return { ...state, carColors: [defaultCarColor, ...action.carColors] }
    case SET_RATES:
      return { ...state, rates: action.rates }
    case SET_RATE:
      return { ...state, rateId: action.rate }
    case SET_FUL_TANK:
      return { ...state, isFullTank: action.isFullTank }
    case SET_CHILD_CHAIR:
      return { ...state, isNeedChildChair: action.isNeedChildChair }
    case SET_RIGHT_WHEEL:
      return { ...state, isRightWheel: action.isRightWheel }
    case SET_DATE_FROM:
      return { ...state, dateFrom: action.dateFrom }
    case SET_DATE_TO:
      return { ...state, dateTo: action.dateTo }
    case SET_PRICE:
      return { ...state, price: action.price }
    default:
      return state
  }
}

export const setColor = (color) => ({
  type: SET_COLOR,
  color,
})
export const setCarColors = (carColors) => ({
  type: SET_CAR_COLORS,
  carColors,
})

export const setIsFullTank = (isFullTank) => ({
  type: SET_FUL_TANK,
  isFullTank,
})

export const setIsNeedChildChair = (isNeedChildChair) => ({
  type: SET_CHILD_CHAIR,
  isNeedChildChair,
})

export const setIsRightWheel = (isRightWheel) => ({
  type: SET_RIGHT_WHEEL,
  isRightWheel,
})

export const setDateFrom = (dateFrom) => ({
  type: SET_DATE_FROM,
  dateFrom,
})

export const setDateTo = (dateTo) => ({
  type: SET_DATE_TO,
  dateTo,
})

const setRatesData = (rates) => ({
  type: SET_RATES,
  rates,
})

export const setRate = (rate) => ({
  type: SET_RATE,
  rate,
})

export const setPrice = (price) => ({
  type: SET_PRICE,
  price,
})

export const setRates = () => async (dispatch) => {
  const rates = await rateQuery()
  dispatch(setRatesData(rates.data))
}

export default orderOptionsReducer
