import { useState } from "react"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import cls from "./Autocomplete.module.scss"

const Autocomplete = ({ placeholder, isDisable, value, list }) => {
  const [newValue, setValue] = useState(value)
  const [isShowList, setIsShowList] = useState(false)

  const handleInputChange = (e) => {
    setIsShowList(true)
    setValue(e.target.value)
  }

  const handelInputBlur = () => {
    setIsShowList(false)
  }

  const handelClickClear = () => {
    setValue("")
  }

  const getList = (list) => {
    return (
      <div className={cls.list}>
        {list.map((item) => (
          <div key={item.id} className={cls.item}>
            {item.name}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.inputWrapper}>
        <input
          type="text"
          value={newValue}
          onChange={handleInputChange}
          onBlur={handelInputBlur}
          placeholder={placeholder}
          className={cls.field}
          disabled={isDisable}
        />
        {newValue && (
          <div className={cls.clear} onClick={handelClickClear}>
            <CloseIcon />
          </div>
        )}
        {isShowList && getList(list)}
      </div>
    </div>
  )
}

export default Autocomplete
