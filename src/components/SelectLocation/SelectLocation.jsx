import Autocomplete from "../Autocomplete/Autocomplete"
import map from "../../assets/img/map.jpg"
import cls from "./SelectLocation.module.scss"
import { useEffect } from "react"
import { connect } from "react-redux"
import { setCity, setCityList } from "../../store/locationReducer"

const SelectLocation = (props) => {
  const { city, cityList, setCityList } = props
  useEffect(() => {
    cityList.length === 0 && setCityList()
  }, [])

  return (
    <>
      <div className={cls.wrapper}>
        <div className={cls.select}>
          <div>Город</div>
          <Autocomplete
            placeholder="Начните вводить город ..."
            value={city.name}
            list={cityList}
          />
          <div>Пункт выдачи</div>
          <Autocomplete
            placeholder="Начните вводить пункт ..."
            isDisable={!city.name}
          />
        </div>

        <div>Выбрать на карте:</div>
        <div className={cls.map}>
          <img src={map} alt="map" />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  cityList: state.location.cityList,
  city: state.location.city,
})

const mapDispatchToProps = (dispatch) => ({
  setCityList: () => {
    dispatch(setCityList())
  },
  setCity: () => {
    dispatch(setCity())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectLocation)
