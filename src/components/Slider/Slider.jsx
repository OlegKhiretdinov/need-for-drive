import { Carousel } from "react-responsive-carousel"
import sliderContent from "../../assets/content/sliderContent"
import LinkButton from "../LinkButton/LinkButton"
import cls from "./Slider.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const renderIndicator = (onClick, isSelected) => {
  return (
    <li
      onClick={onClick}
      className={[
        cls.indicatorStyle,
        isSelected ? cls.selectedIndicator : null,
      ].join(" ")}
    />
  )
}

const renderArrowPrev = (onClick) => {
  return (
    <>
      <div className={[cls.arrow, cls.arrowLeft].join(" ")} />
      <div
        onClick={onClick}
        className={[cls.button, cls.buttonLeft].join(" ")}
      />
    </>
  )
}
const renderArrowNext = (onClick) => {
  return (
    <>
      <div className={`${cls.arrow} ${cls.arrowRight}`} />
      <div onClick={onClick} className={`${cls.button} ${cls.buttonRight}`} />
    </>
  )
}

const Slider = () => {
  return (
    <div className={cls.wrapper}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        renderIndicator={renderIndicator}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
      >
        {sliderContent.map((slide, index) => (
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
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
