import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import cls from "./SideBar.module.scss"

const SideBar = () => {
  return (
    <div className={cls.sideBar}>
      <LanguageSwitcher />
    </div>
  )
}

export default SideBar
