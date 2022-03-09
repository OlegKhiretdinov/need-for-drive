import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram.svg"
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg"
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg"
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
  return !isShowMenu ? (
    <div className={cls.Overlay}>
      <div className={cls.Menu}>
        <ul className={cls.List}>
          {menuConfig.map((item) => (
            <li key={item.txt}>
              <a href={item.src} className={cls.Item}>
                {item.txt}
              </a>
            </li>
          ))}
        </ul>

        <div className={cls.Social}>
          <a href="#" className={cls.SocialItem}>
            <TelegramIcon />
          </a>
          <a href="#" className={cls.SocialItem}>
            <FacebookIcon />
          </a>
          <a href="#" className={cls.SocialItem}>
            <InstagramIcon />
          </a>
        </div>
      </div>

      {devise === DEVISE.mobile && (
        <div className={cls.LangWrapper}>
          <LanguageSwitcher />
        </div>
      )}
    </div>
  ) : null
}

export default Menu