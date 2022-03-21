import { useEffect, useState } from "react"
import { connect } from "react-redux"
import {
  setCategory,
  setCategoryList,
  setModel,
  setModelList,
} from "../../store/carModelReducer"
import { defaultCategoryFilter } from "../../utils/const"
import Loader from "../Loader/Loader"
import ModelCard from "../ModelCard/ModelCard"
import cls from "./SelectModel.module.scss"

const SelectModel = ({
  categoryList,
  setCategoryList,
  setModelList,
  modelList,
  isLoading,
}) => {
  const [filterId, setFilterId] = useState(defaultCategoryFilter.id)

  useEffect(() => {
    setCategoryList()
  }, [])

  useEffect(() => {
    setModelList(filterId)
  }, [filterId])

  const handleButtonClick = ({ target }) => {
    setFilterId(target.id)
  }

  const cars = modelList?.map((model) => (
    <ModelCard model={model} key={model.id} />
  ))

  const filter = categoryList.map((item) => (
    <div className={cls.item} key={item.id}>
      <input
        type="radio"
        name="model"
        id={item.id}
        onChange={handleButtonClick}
        checked={item.id === filterId}
      />
      <label htmlFor={item.id} title={item.description}>
        {item.name}
      </label>
    </div>
  ))

  return (
    <>
      <div className={cls.filter}>{filter}</div>
      {isLoading ? <Loader /> : <div className={cls.carsList}>{cars}</div>}
    </>
  )
}

const mapStateToProps = (state) => ({
  modelList: state.model.modelList,
  categoryList: state.model.categoryList,
  isLoading: state.model.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
  setModelList: (filterId) => {
    dispatch(setModelList(filterId))
  },
  setCategoryList: (category) => {
    dispatch(setCategoryList(category))
  },
  setModel: (model) => {
    dispatch(setModel(model))
  },
  setCategory: (category) => {
    dispatch(setCategory(category))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectModel)
