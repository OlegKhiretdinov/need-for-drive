import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCategoryList, setModelList } from "../../store/carModelReducer"
import { defaultCategoryFilter } from "../../utils/const"
import Loader from "../Loader/Loader"
import ModelCard from "../ModelCard/ModelCard"
import cls from "./SelectModel.module.scss"

const SelectModel = () => {
  const { modelList, categoryList, isLoading } = useSelector((state) => ({
    modelList: state.model.modelList,
    categoryList: state.model.categoryList,
    isLoading: state.model.isLoading,
  }))
  const dispatch = useDispatch()
  const [filterId, setFilterId] = useState(defaultCategoryFilter.id)

  useEffect(() => {
    dispatch(setCategoryList())
  }, [])

  useEffect(() => {
    dispatch(setModelList(filterId))
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

export default SelectModel
