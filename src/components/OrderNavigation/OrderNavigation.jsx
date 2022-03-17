import { Link } from "react-router-dom"
import cls from "./OrderNavigation.module.scss"

const navConfig = [
  { name: "Местоположение", link: "/order/location" },
  { name: "Модель", link: "/order/model" },
  { name: "Дополнительно", link: "/order/options" },
  { name: "Итого", link: "/order/total" },
]
const navItem = ({ name, link }) => (
  <div key={link} className={cls.navItem}>
    <Link to={link} exact="true" className={cls.link}>
      {name}
    </Link>
  </div>
)

const OrderNavigation = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.navList}>{navConfig.map(navItem)}</div>
    </div>
  )
}

export default OrderNavigation
