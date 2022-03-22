import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { setOrderId } from "../../store/orderOptionsReducer"
import LinkButton from "../LinkButton/LinkButton"
import cls from "./OrderConfirm.module.scss"

const OrderConfirm = () => {
  const dispatch = useDispatch()

  const [, setSearchParams] = useSearchParams()

  const { location, model, options } = useSelector((state) => ({
    location: state.location,
    model: state.model.model,
    options: state.options,
  }))

  const orderData = {
    orderStatusId: { name: "Новые", id: "5e26a191099b810b946c5d89" },
    cityId: location.city,
    pointId: location.point,
    carId: model,
    color: options.color,
    dateFrom: options.dateFrom,
    dateTo: options.dateTo,
    rateId: options.rateId,
    price: options.price,
    isFullTank: options.isFullTank,
    isNeedChildChair: options.isNeedChildChair,
    isRightWheel: options.isRightWheel,
  }

  if (options.orderId) {
    setSearchParams({ orderId: options.orderId })
  }

  const handleConfirmOrder = () => {
    dispatch(setOrderId(orderData))
  }

  return (
    <div className={cls.overlay}>
      <h3 className={cls.title}>Подтвердить заказ</h3>
      <div>
        <LinkButton
          to={`/order/total/?order=modal`}
          onClick={handleConfirmOrder}
          text={"Подтвердить"}
          isLoading={!!options.isOrderLoad}
          className={cls.button}
        />
        <LinkButton to={`/order/total`} text={"Вернуться"} isCancel={true} />
      </div>
    </div>
  )
}

export default OrderConfirm
