import cls from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={cls.footer}>
      <span className={cls.copyright}>© 2016-2019 «Need for drive»</span>
      <span className={cls.phone}>8 (495) 234-22-44</span>
    </div>
  )
}

export default Footer
