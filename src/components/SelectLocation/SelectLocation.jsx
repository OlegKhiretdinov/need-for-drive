import Autocomplete from "../Autocomplete/Autocomplete"
import map from "../../assets/img/map.jpg"
import cls from "./SelectLocation.module.scss"

const SelectLocation = () => {
  return (
    <>
      <div className={cls.wrapper}>
        <div className={cls.select}>
          <div>Город</div>
          <Autocomplete placeholder="Начните вводить город ..." />
          <div>Пункт выдачи</div>
          <Autocomplete placeholder="Начните вводить пункт ..." />
        </div>

        <div>Выбрать на карте:</div>
        <div className={cls.map}>
          <img src={map} alt="map" />
        </div>
      </div>
    </>
  )
}

export default SelectLocation
