import { Link } from "react-router-dom"
import cls from "./LinkButton.module.scss"

const LinkButton = ({ to, text, isLoading, className }) => {
  return (
    <Link className={`${cls.Link} ${className}`} to={to}>
      {isLoading ? null : text}
    </Link>
  )
}

export default LinkButton
