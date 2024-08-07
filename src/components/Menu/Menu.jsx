import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram.svg"
import cls from "./Menu.module.scss"
import { DEVISE } from "../../utils/const"

const menuConfig = [
  {
    src: "#",
    txt: "Парковка",
  },
  {
    src: "#",
    txt: "Страховка",
  },
  {
    src: "#",
    txt: "Бензин",
  },
  {
    src: "#",
    txt: "Обслуживание",
  },
]

const Menu = ({ isShowMenu, devise }) => {
  if (isShowMenu) return null

  return (
    <div className={cls.overlay}>
      <div className={cls.menu}>
        <ul className={cls.list}>
          {menuConfig.map((item) => (
            <li key={item.txt}>
              <a href={item.src} className={cls.item}>
                {item.txt}
              </a>
            </li>
          ))}
        </ul>

        <div className={cls.social}>
          <a href="#" className={cls.socialItem}>
            <TelegramIcon />
          </a>
        </div>
      </div>

      {devise === DEVISE.mobile && (
        <div className={cls.langWrapper}>
          <LanguageSwitcher />
        </div>
      )}
    </div>
  )
}

export default Menu
