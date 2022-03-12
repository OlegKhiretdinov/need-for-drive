import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Autocomplete from "../Autocomplete/Autocomplete"
import cls from "./SelectLocation.module.scss"
import {
  setCity,
  setCityList,
  setPoint,
  setPointList,
} from "../../store/locationReducer"
import CustomMap from "../CustomMap/CustomMap"

const SelectLocation = () => {
  const dispatch = useDispatch()
  const { city, cityList, point, pointList } = useSelector(
    (state) => state.location
  )

  useEffect(() => {
    cityList.length === 0 && dispatch(setCityList())
  }, [])

  useEffect(() => {
    city?.id && dispatch(setPointList(city))
  }, [city])

  const handleSelectCity = (id) => {
    if (id === null) {
      dispatch(setPoint({}))
      dispatch(setPointList([]))
      dispatch(setCity({}))
    } else {
      const selectedCity = cityList.find((item) => item.id === id)
      dispatch(setCity(selectedCity))
    }
  }

  const handleSelectPoint = (id) => {
    if (id === null) {
      dispatch(setPoint({}))
    } else {
      const selectedPoint = pointList.find((item) => item.id === id)
      dispatch(setPoint(selectedPoint))
    }
  }

  return (
    <>
      <div className={cls.select}>
        <div>Город</div>
        <Autocomplete
          placeholder="Начните вводить город ..."
          initialValue={city?.name}
          list={cityList}
          handleSelect={handleSelectCity}
        />
        <div>Пункт выдачи</div>
        <Autocomplete
          placeholder="Начните вводить пункт ..."
          isDisable={!city.name}
          initialValue={point.name}
          list={pointList}
          handleSelect={handleSelectPoint}
        />
      </div>
      <div>
        <div>Выбрать на карте:</div>
        <div className={cls.map}>
          <CustomMap />
        </div>
      </div>
    </>
  )
}

export default SelectLocation
