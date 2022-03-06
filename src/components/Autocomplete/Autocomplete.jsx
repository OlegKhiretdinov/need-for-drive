import { useEffect, useState } from "react"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import cls from "./Autocomplete.module.scss"

const Autocomplete = ({
  placeholder,
  isDisable,
  initialValue,
  list,
  handleSelect,
}) => {
  const [newValue, setValue] = useState(initialValue || "")
  const [isShowList, setIsShowList] = useState()
  const [autocompleteList, setAutocompleteList] = useState(list)

  useEffect(() => {
    const closeList = () => setIsShowList(false)
    document.body.addEventListener("click", closeList)
    return () => document.body.removeEventListener("click", closeList)
  }, [])

  const searchByList = (list, string) =>
    list.filter((item) => {
      return item.name.toLowerCase().includes(string.toLowerCase())
    })

  const handleInputFocus = (e) => {
    setIsShowList(true)
    setAutocompleteList(searchByList(list, e.target.value))
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
    setAutocompleteList(searchByList(list, e.target.value))
  }

  const handleClickClear = () => {
    setValue("")
    setIsShowList(false)
    setAutocompleteList(list)
    handleSelect(null)
  }

  const handleItemClick = (e) => {
    typeof handleSelect === "function" && handleSelect(e.target.dataset.id)
    setValue(e.target.textContent)
    setIsShowList(false)
  }

  const getList = (list) => {
    return list ? (
      <div className={cls.list}>
        {list.map((item) => (
          <div
            key={item.id}
            data-id={item.id}
            className={cls.item}
            onClick={handleItemClick}
          >
            {item.name}
          </div>
        ))}
      </div>
    ) : null
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.inputWrapper} onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          value={newValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          className={cls.field}
          disabled={isDisable}
        />
        {newValue && (
          <div className={cls.clear} onClick={handleClickClear}>
            <CloseIcon />
          </div>
        )}
        {isShowList && getList(autocompleteList)}
      </div>
    </div>
  )
}

export default Autocomplete
