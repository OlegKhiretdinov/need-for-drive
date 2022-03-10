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
  const { step } = useParams()

  const stepOneString = location.point?.address
    ? `${location.city.name}, ${location.point?.address}`
    : ""

  const selectedModelName = useSelector((state) => state.model.model.name)

  return (
    <div className={cls.wrapper}>
      <h3 className={cls.title}>Ваш Заказ:</h3>
      <div className={cls.row}>
        <div className={cls.label}>Пункт выдачи</div>
        <div className={cls.space} />
        <div className={cls.value}>{stepOneString}</div>
      </div>
      {selectedModelName && (
        <div className={cls.row}>
          <div className={cls.label}>Модель</div>
          <div className={cls.space} />
          <div className={cls.value}>{selectedModelName}</div>
        </div>
      )}
      <div className={cls.price}>
        <b>Цена:</b> от 8 000 до 12 000 ₽
      </div>
      <LinkButton
        to={`/order/${buttonConfig[step].to}`}
        text={buttonConfig[step].text}
        isLoading={false}
        className={cls.orderButton}
        isBlocked={true}
      />
    </div>
  )
}

export default OrderInfo
