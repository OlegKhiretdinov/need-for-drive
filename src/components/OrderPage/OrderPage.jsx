import { useCallback, useEffect, useState } from "react"
import SideBar from "../SideBar/SideBar"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import MenuTrigger from "../MenuTrigger/MenuTrigger"
import OrderNavigation from "../OrderNavigation/OrderNavigation"
import SelectLocation from "../SelectLocation/SelectLocation"
import OrderInfo from "../OrderInfo/OrderInfo"
import { getDevice } from "../../utils/utils"
import { DEVISE } from "../../utils/const"
import cls from "./OrderPage.module.scss"
import { Navigate, useParams } from "react-router-dom"
import SelectModel from "../SelectModel/SelectModel"
import OrderOptions from "../OrderOptions/OrderOptions"

const OrderPage = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [devise, setDevise] = useState(getDevice(window))

  const { step } = useParams()

  const handelResize = useCallback(() => {
    getDevice(window) !== devise && setDevise(getDevice(window))
  }, [devise])

  useEffect(() => {
    window.addEventListener("resize", handelResize)
    return () => {
      window.removeEventListener("resize", handelResize)
    }
  }, [handelResize])

  const orderContent = (step) => {
    switch (step) {
      case "location":
        return <SelectLocation />
      case "model":
        return <SelectModel />
      case "options":
        return <OrderOptions />
      default:
        return <Navigate to="/order" />
    }
  }

  return (
    <div className={cls.wrapper}>
      {devise !== DEVISE.mobile && <SideBar />}
      <div className={cls.page}>
        <div className={cls.headerWrapper}>
          <Header />
        </div>
        <OrderNavigation />
        <div className={cls.main}>
          <div className={cls.orderWrapper}>{orderContent(step)}</div>
          <OrderInfo />
        </div>
      </div>

      <div className={cls.MenuTriggerWrapper}>
        <MenuTrigger isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      </div>
      {isShowMenu && <Menu devise={devise} />}
    </div>
  )
}

export default OrderPage
