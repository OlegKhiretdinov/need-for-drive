import { useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"
import { dateDuration } from "../../utils/utils"
import LinkButton from "../LinkButton/LinkButton"
import cls from "./OrderInfo.module.scss"

const buttonConfig = {
  location: { text: "Выбрать модель", to: "model" },
  model: { text: "Дополнительно", to: "options" },
  options: { text: "Итого", to: "total" },
  total: { text: "Заказать", to: "total/?order=modal" },
}

const OrderInfo = () => {
  const { location, model, options } = useSelector((state) => ({
    location: state.location,
    model: state.model.model,
    options: state.options,
  }))

  const { step } = useParams()

  const SelectedLocation = location.point?.address
    ? `${location.city.name}, ${location.point?.address}`
    : ""

  const [searchParams] = useSearchParams()
  const orderId = searchParams.get("orderId")

  const getButtonStatus = (step) => {
    switch (step) {
      case "location":
        return !location.point?.id
      case "model":
        return !model?.id
      case "options":
        return !(options.price > 0)
      default:
        return false
    }
  }

  const orderDuration = options.dateTo - options.dateFrom
  const rangePrice = model?.id && `${model.priceMin} - ${model.priceMax}`
  const price = options.price || rangePrice

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
      {options.color && (
        <div className={cls.row}>
          <div className={cls.label}>Цвет</div>
          <div className={cls.space} />
          <div className={cls.value}>{options.color}</div>
        </div>
      )}
      {orderDuration > 0 && (
        <div className={cls.row}>
          <div className={cls.label}>Длительность аренды</div>
          <div className={cls.space} />
          <div className={cls.value}>{dateDuration(orderDuration)}</div>
        </div>
      )}
      {options.rateId.id && (
        <div className={cls.row}>
          <div className={cls.label}>Тариф</div>
          <div className={cls.space} />
          <div className={cls.value}>{options.rateId.rateTypeId.name}</div>
        </div>
      )}
      {options.isFullTank && (
        <div className={cls.row}>
          <div className={cls.label}>Полный бак</div>
          <div className={cls.space} />
          <div className={cls.value}>Да</div>
        </div>
      )}
      {options.isNeedChildChair && (
        <div className={cls.row}>
          <div className={cls.label}>Детское кресло</div>
          <div className={cls.space} />
          <div className={cls.value}>Да</div>
        </div>
      )}
      {options.isRightWheel && (
        <div className={cls.row}>
          <div className={cls.label}>Правый руль</div>
          <div className={cls.space} />
          <div className={cls.value}>Да</div>
        </div>
      )}
      <div className={cls.price}>
        <b>Цена:</b> {price}
      </div>
      {orderId ? (
        <LinkButton
          to={`#`}
          text={"Отменить"}
          isCancel={true}
          className={cls.orderButton}
        />
      ) : (
        <LinkButton
          to={`/order/${buttonConfig[step].to}`}
          text={buttonConfig[step].text}
          isLoading={false}
          className={cls.orderButton}
          isBlocked={getButtonStatus(step)}
        />
      )}
    </div>
  )
}

export default OrderInfo
