// import { Link } from "react-router-dom"
import sliderContent from "../../assets/content/sliderContent"
import LinkButton from "../LinkButton/LinkButton"
import cls from "./Slider.module.scss"

const Slider = () => {
  return sliderContent.map((slide, index) => (
    <div
      key={index}
      className={cls.item}
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${slide.img}) center/cover`,
      }}
    >
      <div className={cls.content}>
        <h1 className={cls.title}>{slide.title}</h1>
        <p className={cls.text}>{slide.text}</p>
        <LinkButton
          className={cls[slide.class]}
          to={slide.link}
          text={slide.linkText}
        />
      </div>
    </div>
  ))
}

export default Slider
