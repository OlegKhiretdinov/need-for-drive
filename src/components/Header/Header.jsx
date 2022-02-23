import { ReactComponent as LocationPoint } from "../../assets/icons/locationPoint.svg"
import cls from "./Header.module.scss"

const Header = () => {
  return (
    <div className={cls.Header}>
      <span className={cls.Title}>Need for Drive</span>
      <div className={cls.Location}>
        <LocationPoint />
        <span>Ульяновск</span>
      </div>
    </div>
  )
}

export default Header
