import { Link } from "react-router-dom"
import cls from "./LinkButton.module.scss"

const LinkButton = ({ to, text, isLoading, className, isBlocked }) => {
  return (
    <Link
      className={`${cls.Link} ${className} ${isBlocked ? cls.blocked : ""}`}
      to={to}
    >
      {isLoading ? null : text}
    </Link>
  )
}

export default LinkButton
