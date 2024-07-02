import { useState } from "react"
import { langs } from "../../utils/const"
import { CURRENT_LANG } from "../../utils/localization"
import cls from "./LanguageSwitcher.module.scss"

const LanguageSwitcher = () => {
  const [currentLangIndex, setLangIndex] = useState(0)

  const handleChangeLang = () => {
    if (currentLangIndex + 1 < langs.length) {
      setLangIndex(currentLangIndex + 1)
    } else {
      setLangIndex(0)
    }
  }

  return (
    <div className={cls.wrapper} onClick={handleChangeLang}>
      <span>{CURRENT_LANG[langs[currentLangIndex]]}</span>
    </div>
  )
}

export default LanguageSwitcher
