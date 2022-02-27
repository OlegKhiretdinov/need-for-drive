import { useState } from "react"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import cls from "./Autocomplete.module.scss"

const Autocomplete = ({ placeholder }) => {
  const [value, setValue] = useState("")

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handelClickClear = () => {
    setValue("")
  }

  return (
    <div className={cls.wrapper}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={cls.field}
      />
      {value && (
        <div className={cls.clear} onClick={handelClickClear}>
          <CloseIcon />
        </div>
      )}
    </div>
  )
}

export default Autocomplete
