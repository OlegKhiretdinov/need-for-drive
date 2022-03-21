import { useRef } from "react"
import { useSelector } from "react-redux"
import cls from "./OrderTotal.module.scss"
import carImg from "../../assets/img/default_car.png"
import { dateFormat } from "../../utils/const"
import { useSearchParams } from "react-router-dom"
import OrderConfirm from "../OrderConfirm/OrderConfirm"

const OrderTotal = () => {
  const { model, number, tank, dateFrom, thumbnail } = useSelector((state) => ({
    model: state.model.model?.name,
    number: state.model.model?.number,
    tank: state.model.model?.tank,
    dateFrom: state.options.dateFrom,
    thumbnail: state.model.model?.thumbnail,
  }))

  const [searchParams] = useSearchParams()
  const orderStatus = searchParams.get("order")

  const imgRef = useRef()

  return (
    <>
      <div>
        <div className={cls.description}>
          <div className={`${cls.item} ${cls.model}`}>{model}</div>
          <div className={`${cls.item} ${cls.number}`}>{number}</div>
          <div className={cls.item}>
            <b>Топливо</b> {tank}%
          </div>
          <div className={cls.item}>
            <b>Доступна с</b>{" "}
            {`${new Date(dateFrom).toLocaleDateString("ru", dateFormat)}`}
          </div>
        </div>
        <div className={cls.thumbnail}>
          <img
            src={thumbnail?.path}
            alt={model}
            onError={() => (imgRef.current.src = carImg)}
            ref={imgRef}
          />
        </div>
      </div>
      {orderStatus === "modal" && <OrderConfirm />}
    </>
  )
}

export default OrderTotal