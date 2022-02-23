import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import cls from "./SideBar.module.scss"

const SideBar = () => {
  return (
    <div className={cls.SideBar}>
      <LanguageSwitcher />
    </div>
  )
}

export default SideBar
