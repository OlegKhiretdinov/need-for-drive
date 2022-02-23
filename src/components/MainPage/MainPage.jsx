import { useCallback, useEffect, useState } from "react"
import { DEVISE } from "../../utils/const"
import { getDevice } from "../../utils/utils"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import LinkButton from "../LinkButton/LinkButton"
import Menu from "../Menu/Menu"
import MenuTrigger from "../MenuTrigger/MenuTrigger"
import SideBar from "../SideBar/SideBar"
import Slider from "../Slider/Slider"
import cls from "./MainPage.module.scss"

const MainPage = () => {
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
    <>
      {isShowMenu && <div className={`${cls.Overlay} ${cls.PageOverlay}`} />}

      <div className={cls.MainPage}>
        <div className={cls.Page}>
          {devise !== DEVISE.mobile && <SideBar />}

          <div className={cls.Content}>
            <Header />
            <div>
              <h1 className={cls.Title}>
                <span>Каршеринг</span>
                <br />
                <span className={cls.accent}>Need for drive</span>
              </h1>
              <p className={cls.Description}>
                Поминутная аренда авто твоего города
              </p>
              <LinkButton
                to={"/order"}
                text={"Забронировать"}
                className={cls.Button}
              />
            </div>
            <Footer />
          </div>

          <div className={cls.MenuTriggerWrapper}>
            <MenuTrigger
              isShowMenu={isShowMenu}
              setIsShowMenu={setIsShowMenu}
            />
          </div>
          {isShowMenu && <Menu devise={devise} />}
        </div>

        {devise === DEVISE.desktop && <Slider />}
      </div>
    </>
  )
}

export default MainPage
