import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import LinkButton from "../LinkButton/LinkButton"
import cls from "./OrderInfo.module.scss"

const buttonConfig = {
  location: { text: "Выбрать модель", to: "model" },
  model: { text: "Дополнительно", to: "options" },
  options: { text: "Итого", to: "total" },
  total: { text: "Заказать", to: "total" },
}

const OrderInfo = () => {
  const location = useSelector((state) => state.location)
  const { model } = useSelector((state) => state.model)
  const { step } = useParams()

  const SelectedLocation = location.point?.address
    ? `${location.city.name}, ${location.point?.address}`
    : ""

  const getButtonStatus = (step) => {
    switch (step) {
      case "location":
        return !location.point?.id
      case "model":
        return !model?.id
      default:
        return false
    }
  }

  const price = model?.id && `${model.priceMin} - ${model.priceMax}`

  return (
    <div className={cls.wrapper}>
      <h3 className={cls.title}>Ваш Заказ:</h3>
      <div className={cls.row}>
        <div className={cls.label}>Пункт выдачи</div>
        <div className={cls.space} />
        <div className={cls.value}>{SelectedLocation}</div>
      </div>
      {model.name && (
        <div className={cls.row}>
          <div className={cls.label}>Модель</div>
          <div className={cls.space} />
          <div className={cls.value}>{model.name}</div>
        </div>
      )}
      <div className={cls.price}>
        <b>Цена:</b> {price}
      </div>
      <LinkButton
        to={`/order/${buttonConfig[step].to}`}
        text={buttonConfig[step].text}
        isLoading={false}
        className={cls.orderButton}
        isBlocked={getButtonStatus(step)}
      />
    </div>
  )
}

export default OrderInfo
