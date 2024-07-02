import { ReactComponent as LocationPoint } from "../../assets/icons/locationPoint.svg"
import cls from "./Header.module.scss"

const Header = () => {
  return (
    <div className={cls.header}>
      <span className={cls.title}>Need for Drive</span>
      <div className={cls.location}>
        <LocationPoint />
        <span>Ульяновск</span>
      </div>
    </div>
  )
}

export default Header
