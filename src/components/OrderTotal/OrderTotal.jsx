import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import cls from "./OrderTotal.module.scss"
import carImg from "../../assets/img/default_car.png"
import { dateFormat } from "../../utils/const"
import { useSearchParams } from "react-router-dom"
import OrderConfirm from "../OrderConfirm/OrderConfirm"
import { orderQuery } from "../../api/request"
import { setCity, setPoint } from "../../store/locationReducer"
import {
  setColor,
  setDateFrom,
  setDateTo,
  setIsFullTank,
  setIsNeedChildChair,
  setIsRightWheel,
  setPrice,
  setRate,
} from "../../store/orderOptionsReducer"
import { setModel } from "../../store/carModelReducer"

const OrderTotal = () => {
  const { model, number, tank, dateFrom, thumbnail } = useSelector((state) => ({
    model: state.model.model?.name,
    number: state.model.model?.number,
    tank: state.model.model?.tank,
    dateFrom: state.options.dateFrom,
    thumbnail: state.model.model?.thumbnail,
  }))
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()
  const orderStatus = searchParams.get("order")
  const orderId = searchParams.get("orderId")

  const imgRef = useRef()

  useEffect(
    () =>
      orderId &&
      (async () => {
        const { data } = await orderQuery(orderId)
        dispatch(setCity(data.cityId))
        dispatch(setPoint(data.pointId))
        dispatch(setModel(data.carId))
        dispatch(setColor(data.color))
        dispatch(setDateFrom(data.dateFrom))
        dispatch(setDateTo(data.dateTo))
        dispatch(setRate(data.rateId))
        dispatch(setPrice(data.price))
        dispatch(setIsFullTank(data.isFullTank))
        dispatch(setIsNeedChildChair(data.isNeedChildChair))
        dispatch(setIsRightWheel(data.isRightWheel))
      })(),
    [orderId]
  )

  return (
    <>
      <div className={cls.wrapper}>
        <div className={cls.description}>
          {orderId && (
            <h2 className={cls.confirmTitle}>Ваш заказ подтверждён</h2>
          )}
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
        <div className={cls.space} />
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
