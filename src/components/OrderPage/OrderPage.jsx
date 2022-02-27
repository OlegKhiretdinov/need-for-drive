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
import { Route, Routes, Navigate } from "react-router-dom"

const OrderPage = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [devise, setDevise] = useState(getDevice(window))

  const handelResize = useCallback(() => {
    getDevice(window) !== devise && setDevise(getDevice(window))
  }, [devise])

  useEffect(() => {
    window.addEventListener("resize", handelResize)
    return () => {
      window.removeEventListener("resize", handelResize)
    }
  }, [handelResize])

  return (
    <div className={cls.wrapper}>
      {devise !== DEVISE.mobile && <SideBar />}
      <div className={cls.page}>
        <div className={cls.headerWrapper}>
          <Header />
        </div>
        <OrderNavigation />
        <div className={cls.main}>
          <Routes>
            <Route exact path="/" element={<Navigate to="location" />} />
            <Route exact path="/location" element={<SelectLocation />} />
          </Routes>
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
