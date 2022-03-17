import LinkButton from "../LinkButton/LinkButton"
import cls from "./OrderInfo.module.scss"

const OrderInfo = () => {
  return (
    <div className={cls.wrapper}>
      <h3 className={cls.title}>Ваш Заказ:</h3>
      <div className={cls.row}>
        <div className={cls.label}>Пункт выдачи</div>
        <div className={cls.space} />
        <div className={cls.value}>Ульяновск, Нариманова 42</div>
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
