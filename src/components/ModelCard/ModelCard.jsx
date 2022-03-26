import { useRef } from "react"
import cls from "./ModelCard.module.scss"
import carImg from "../../assets/img/default_car.png"
import { useSelector, useDispatch } from "react-redux"
import { setModel } from "../../store/carModelReducer"
import {
  setCarColors,
  setColor,
  setPrice,
} from "../../store/orderOptionsReducer"
import { defaultCarColor } from "../../utils/const"

const ModelCard = ({ model }) => {
  const { thumbnail, name, priceMin, priceMax, id } = model
  const imgRef = useRef()
  const selectedModelId = useSelector((state) => state.model.model.id)
  const dispatch = useDispatch()

  const handleCardClick = () => {
    dispatch(setModel(model))
    dispatch(setCarColors(model.colors))
    dispatch(setColor(defaultCarColor))
    dispatch(setPrice(0))
  }

  return (
    <div
      className={`${cls.card} ${selectedModelId === id ? cls.selected : ""}`}
      data-id={id}
      onClick={handleCardClick}
    >
      <div>
        <h3 className={cls.title}>{name}</h3>
        <div className={cls.price}>
          {priceMin} - {priceMax}
        </div>
      </div>
      <div className={cls.thumbnail}>
        <img
          src={thumbnail.path}
          alt={name}
          onError={() => (imgRef.current.src = carImg)}
          ref={imgRef}
        />
      </div>
    </div>
  )
}

export default ModelCard
