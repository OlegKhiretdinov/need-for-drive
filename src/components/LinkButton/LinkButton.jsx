import { Link } from "react-router-dom"
import cls from "./LinkButton.module.scss"

const LinkButton = ({ to, text, isLoading, className, isBlocked }) => {
  return isBlocked ? (
    <span className={`${cls.Link} ${className} ${cls.blocked}`}>{text}</span>
  ) : (
    <Link className={`${cls.Link} ${className}`} to={to}>
      {isLoading ? null : text}
    </Link>
  )
}

export default LinkButton
