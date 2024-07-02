import { useSelector } from "react-redux"
import { Link, useParams, useSearchParams } from "react-router-dom"
import cls from "./OrderNavigation.module.scss"

const navConfig = [
  { name: "Местоположение", step: "location" },
  { name: "Модель", step: "model" },
  { name: "Дополнительно", step: "options" },
  { name: "Итого", step: "total" },
]

const OrderNavigation = () => {
  const { step: currentStep } = useParams()

  const { location, model, price } = useSelector((state) => ({
    location: state.location.point?.id,
    model: state.model.model?.id,
    price: state.options.price,
  }))

  const [searchParams] = useSearchParams()
  const orderId = searchParams.get("orderId")

  const isLinkAvailable = (step) => {
    if (step === "location") {
      return true
    }
    if (step === "model") {
      return !!location
    }
    if (step === "options") {
      return !!model
    }
    if (step === "total") {
      return price > 0
    }
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.navList}>
        {orderId ? (
          <span className={cls.link}>Заказ номер {orderId}</span>
        ) : (
          navConfig.map(({ name, step }) => (
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
          ))
        )}
      </div>
    </div>
  )
}

export default OrderNavigation
