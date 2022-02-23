import cls from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={cls.Footer}>
      <span className={cls.Copyright}>© 2016-2019 «Need for drive»</span>
      <span className={cls.Phone}>8 (495) 234-22-44</span>
    </div>
  )
}

export default Footer
