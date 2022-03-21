import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { setOrderId } from "../../store/orderOptionsReducer"
import LinkButton from "../LinkButton/LinkButton"
import cls from "./OrderConfirm.module.scss"

const OrderConfirm = () => {
  const dispatch = useDispatch()
  const { location, model, options } = useSelector((state) => ({
    location: state.location,
    model: state.model.model,
    options: state.options,
  }))

  const orderData = {
    orderStatusId: {},
    cityId: location.city.cityId,
    pointId: {},
    carId: {},
    color: "string",
    dateFrom: 0,
    dateTo: 0,
    rateId: {},
    price: 0,
    isFullTank: true,
    isNeedChildChair: true,
    isRightWheel: true,
  }
  const handleConfirmOrder = useCallback(() => {
    dispatch(setOrderId(orderData))
  }, [dispatch])

  return (
    <div className={cls.overlay}>
      <h3 className={cls.title}>Подтвердить заказ</h3>
      <div>
        <LinkButton
          to={`/order/total/?order=modal`}
          onClick={handleConfirmOrder}
          text={"Подтвердить"}
        />
        <LinkButton to={`/order/total`} text={"Вернуться"} isCancel={true} />
      </div>
    </div>
  )
}

export default OrderConfirm
