import cls from "./MenuTrigger.module.scss"

const Menu = ({ isShowMenu, setIsShowMenu }) => {
  const handleTriggerMenuClick = () => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <>
      <div onClick={handleTriggerMenuClick} className={cls.wrapper}>
        <div
          className={`${cls.trigger} ${isShowMenu ? cls.open : cls.close}`}
        />
      </div>
    </>
  )
}
export default Menu
