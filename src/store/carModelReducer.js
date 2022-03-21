import { categoryListQuery, modelListQuery } from "../api/request"
import { defaultCategoryFilter } from "../utils/const"

const SET_MODEL_LIST = "SET_MODEL_LIST"
const SET_MODEL = "SET_MODEL"
const SET_CATEGORY_LIST = "SET_CATEGORY_LIST"
const SET_CATEGORY = "SET_CATEGORY"
const SET_IS_LOADING = "SET_IS_LOADING"

const initialState = {
  categoryList: [defaultCategoryFilter],
  category: {},
  modelList: [],
  model: {},
  isLoading: false,
}

const carModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODEL_LIST:
      return { ...state, modelList: action.modelList }
    case SET_MODEL:
      return { ...state, model: action.model }
    case SET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: [defaultCategoryFilter, ...action.categoryList],
      }
    case SET_CATEGORY:
      return { ...state, category: action.category }
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}

const setModelListData = (modelList) => ({
  type: SET_MODEL_LIST,
  modelList,
})

const setCategoryListData = (categoryList) => ({
  type: SET_CATEGORY_LIST,
  categoryList,
})

const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading,
})

export const setModel = (model) => ({
  type: SET_MODEL,
  model,
})

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
})

export const setModelList = (filterId) => async (dispatch, getState) => {
  if (getState().model.isLoading) {
    window.stop()
  }

  dispatch(setIsLoading(true))
  const modelList = await modelListQuery(filterId)
  if (modelList) {
    dispatch(setIsLoading(false))
    dispatch(setModelListData(modelList.data))
  }
}

export const setCategoryList = () => async (dispatch) => {
  const modelList = await categoryListQuery()
  dispatch(setCategoryListData(modelList.data))
}

export default carModelReducer
