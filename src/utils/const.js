export const langs = ["en", "ru"]

export const DEVISE = {
  desktop: "desktop",
  tab: "tab",
  mobile: "mobile",
}

export const SCREEN_SIZE = {
  desktop: 1440,
  tab: 1023,
  mobile: 768,
}

export const defaultCategoryFilter = {
  id: "null",
  name: "Все модели",
  description: "Все модели",
}

export const defaultCarColor = "Любой"

export const otherOptions = [
  {
    name: "isFullTank",
    handler: "setIsFullTank",
    description: "Полный бак",
    price: 500,
  },
  {
    name: "isNeedChildChair",
    handler: "setIsNeedChildChair",
    description: "Детское кресло",
    price: 200,
  },
  {
    name: "isRightWheel",
    handler: "setIsRightWheel",
    description: "Правый руль",
    price: 1600,
  },
]

export const msConvertToUnit = {
  мин: 60000,
  сутки: 86400000,
  "7 дней": 604800000,
  "30 дней": 2592000000,
}
