import Autocomplete from "../Autocomplete/Autocomplete"
import map from "../../assets/img/map.jpg"
import cls from "./SelectLocation.module.scss"
import { useEffect } from "react"
import { connect } from "react-redux"
import {
  setCity,
  setCityList,
  setPoint,
  setPointList,
} from "../../store/locationReducer"

const SelectLocation = (props) => {
  const {
    city,
    cityList,
    setCityList,
    setCity,
    point,
    pointList,
    setPointList,
    setPoint,
  } = props

  useEffect(() => {
    cityList.length === 0 && setCityList()
  }, [])

  useEffect(() => {
    city?.id && setPointList(city)
  }, [city, setPointList])

  const handleSelectCity = (id) => {
    if (id === null) {
      setPoint({})
      setPointList([])
      setCity({})
    } else {
      const selectedCity = cityList.find((item) => item.id === id)
      setCity(selectedCity)
    }
  }

  const handleSelectPoint = (id) => {
    if (id === null) {
      setPoint({})
    } else {
      const selectedPoint = pointList.find((item) => item.id === id)
      setPoint(selectedPoint)
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

      <div>Выбрать на карте:</div>
      <div className={cls.map}>
        <img src={map} alt="map" />
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  cityList: state.location.cityList,
  city: state.location.city,
  pointList: state.location.pointList,
  point: state.location.point,
})

const mapDispatchToProps = (dispatch) => ({
  setCityList: () => {
    dispatch(setCityList())
  },
  setCity: (city) => {
    dispatch(setCity(city))
  },
  setPointList: () => {
    dispatch(setPointList())
  },
  setPoint: (point) => {
    dispatch(setPoint(point))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectLocation)
