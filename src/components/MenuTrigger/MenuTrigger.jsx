import cls from "./MenuTrigger.module.scss"

const MenuMenuTrigger = ({ isShowMenu, setIsShowMenu }) => {
  const handleTriggerMenuClick = () => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <>
      <div onClick={handleTriggerMenuClick} className={cls.Wrapper}>
        <div
          className={`${cls.Trigger} ${isShowMenu ? cls.Open : cls.Close}`}
        />
      </div>
    </>
  )
}
export default MenuMenuTrigger
