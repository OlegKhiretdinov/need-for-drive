import { useSelector } from "react-redux"
import LinkButton from "../LinkButton/LinkButton"
import cls from "./OrderInfo.module.scss"

const OrderInfo = () => {
  const location = useSelector((state) => state.location)
  const stepOneString = location.point?.address
    ? `${location.city.name}, ${location.point?.address}`
    : ""

  return (
    <div className={cls.wrapper}>
      <h3 className={cls.title}>Ваш Заказ:</h3>
      <div className={cls.row}>
        <div className={cls.label}>Пункт выдачи</div>
        <div className={cls.space} />
        <div className={cls.value}>{stepOneString}</div>
      </div>
      <div className={cls.price}>
        <b>Цена:</b> от 8 000 до 12 000 ₽
      </div>
      <LinkButton
        to="model"
        text="выбрать модель"
        isLoading={false}
        isBlocked={true}
      />
    </div>
  )
}

export default OrderInfo
