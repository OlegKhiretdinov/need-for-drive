import { Link } from "react-router-dom"
import cls from "./LinkButton.module.scss"

const LinkButton = ({ to, text, isLoading, className, isBlocked }) => {
  return isBlocked ? (
    <span className={`${cls.link} ${className} ${cls.blocked}`}>{text}</span>
  ) : (
    <Link className={`${cls.link} ${className}`} to={to}>
      {isLoading ? null : text}
    </Link>
  )
}

export default LinkButton
