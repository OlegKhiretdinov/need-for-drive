import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import cls from "./OrderNavigation.module.scss"

const navConfig = [
  { name: "Местоположение", step: "location" },
  { name: "Модель", step: "model" },
  { name: "Дополнительно", step: "options" },
  { name: "Итого", step: "total" },
]

const OrderNavigation = () => {
  const { step: currentStep } = useParams()

  const { location, model } = useSelector((state) => ({
    location: state.location,
    model: state.model.model,
  }))

  const completedSteps = {
    location: !!location.point?.id,
    model: !!model?.id,
  }

  const isLinkAvailable = (step) => {
    if (step === "location") {
      return true
    }
    if (step === "model") {
      return completedSteps.location
    }
    if (step === "options") {
      return completedSteps.location && completedSteps.model
    }
    if (step === "total") {
      return completedSteps.location && completedSteps.model
    }
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.navList}>
        {navConfig.map(({ name, step }) => (
          <div key={step} className={cls.navItem}>
            {isLinkAvailable(step) ? (
              <Link
                to={`/order/${step}`}
                exact="true"
                className={`${cls.link} ${
                  step === currentStep ? cls.active : ""
                }`}
              >
                {name}
              </Link>
            ) : (
              <span className={`${cls.link} ${cls.disable}`}>{name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderNavigation
