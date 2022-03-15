import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ReactDatePicker from "react-datepicker"
import {
  setColor,
  setDateFrom,
  setDateTo,
  setIsFullTank,
  setIsNeedChildChair,
  setIsRightWheel,
  setPrice,
  setRate,
  setRates,
} from "../../store/orderOptionsReducer"
import cls from "./OrderOptions.module.scss"
import "react-datepicker/dist/react-datepicker.css"
import { msConvertToUnit, otherOptions } from "../../utils/const"

const configHandleCheckOtherOptions = {
  setIsFullTank,
  setIsNeedChildChair,
  setIsRightWheel,
}

const OrderOptions = () => {
  const { priceMin, priceMax } = useSelector((state) => state.model.model)
  const options = useSelector((state) => state.options)
  const {
    carColors,
    color,
    rates,
    rateId,
    dateFrom,
    dateTo,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  } = options

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRates())
  }, [])

  useEffect(() => {
    const timeIntervalCount = Math.ceil(
      (dateTo - dateFrom) / msConvertToUnit[rateId.rateTypeId?.unit]
    )
    let totalPrice = timeIntervalCount * rateId.price
    otherOptions.forEach(
      (option) => options[option.name] && (totalPrice += option.price)
    )

    if (totalPrice > priceMax) {
      totalPrice = priceMax
    }

    if (totalPrice < priceMin) {
      totalPrice = priceMin
    }

    if (timeIntervalCount > 0) {
      dispatch(setPrice(totalPrice))
    } else {
      dispatch(setPrice(0))
    }
  }, [dateFrom, dateTo, rateId, isFullTank, isNeedChildChair, isRightWheel])

  const handleColorClick = (e) => {
    dispatch(setColor(e.target.id))
  }

  const handleSelectDateFrom = (date) => {
    date ? dispatch(setDateFrom(date.getTime())) : dispatch(setDateFrom(date))
  }

  const handleSelectDateTo = (date) => {
    date ? dispatch(setDateTo(date.getTime())) : dispatch(setDateTo(date))
  }

  const handleCheckOtherOptions = ({ target }) => {
    dispatch(configHandleCheckOtherOptions[target.id](target.checked))
  }

  const colors = carColors.map((item, index) => (
    <div className={cls.item} key={index}>
      <input
        type="radio"
        name="color"
        id={item}
        onChange={handleColorClick}
        checked={item === color}
        className={cls.inputRadio}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  ))

  const ratesOption = rates?.map((item) => (
    <div className={cls.item} key={item.id}>
      <input
        type="radio"
        name="rate"
        id={item.id}
        onChange={() => dispatch(setRate(item))}
        checked={item.id === rateId?.id}
        className={cls.inputRadio}
      />
      <label
        htmlFor={item.id}
      >{`${item.rateTypeId.name} ${item.price}₽/${item.rateTypeId.unit}`}</label>
    </div>
  ))

  const otherOrderOptions = otherOptions.map((item) => (
    <div className={cls.item} key={item.handler}>
      <input
        type="checkbox"
        id={item.handler}
        onChange={handleCheckOtherOptions}
      />
      <label
        htmlFor={item.handler}
      >{`${item.description}, ${item.price}р`}</label>
    </div>
  ))

  return (
    <>
      <div className={cls.optionsItem}>
        <div className={cls.optionsTitle}>Цвет</div>
        <div className={cls.selectColor}>{colors}</div>
      </div>
      <div className={cls.optionsItem}>
        <div className={cls.optionsTitle}>Дата аренды</div>
        <div className={cls.dateInputWrapper}>
          <span>C</span>
          <ReactDatePicker
            className={cls.input}
            minDate={new Date()}
            onChange={handleSelectDateFrom}
            selected={dateFrom}
            showTimeSelect
            isClearable
            dateFormat="MM.dd.yy hh:mm"
            placeholderText="Введите дату и время"
          />
        </div>
        <div className={cls.dateInputWrapper}>
          <span>По</span>
          <ReactDatePicker
            className={cls.input}
            minDate={dateFrom || new Date()}
            onChange={handleSelectDateTo}
            selected={dateTo}
            showTimeSelect
            isClearable
            dateFormat="MM.dd.yy hh:mm"
            placeholderText="Введите дату и время"
          />
        </div>
      </div>
      <div className={cls.optionsItem}>
        <div className={cls.optionsTitle}>Тариф</div>
        <div className={cls.selectRate}>{ratesOption}</div>
      </div>
      <div className={cls.optionsItem}>
        <div className={cls.optionsTitle}>Доп Услуги</div>
        <div className={cls.otherOptions}>{otherOrderOptions}</div>
      </div>
    </>
  )
}

export default OrderOptions
