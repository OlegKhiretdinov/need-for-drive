import { Link } from "react-router-dom"
import cls from "./LinkButton.module.scss"

const LinkButton = ({
  to,
  text,
  isLoading,
  className,
  isBlocked,
  isCancel,
  onClick,
}) => {
  return isBlocked ? (
    <span className={`${cls.link} ${className} ${cls.blocked}`}>{text}</span>
  ) : (
    <Link
      className={`${cls.link} ${className} ${isCancel ? cls.cancel : ""}`}
      to={to || null}
      onClick={onClick}
    >
      {isLoading ? null : text}
    </Link>
  )
}

export default LinkButton
