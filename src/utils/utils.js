import { DEVISE, SCREEN_SIZE } from "./const"

export const getDevice = (element) => {
  if (element.innerWidth <= SCREEN_SIZE.mobile) {
    return DEVISE.mobile
  }
  if (element.innerWidth <= SCREEN_SIZE.tab) {
    return DEVISE.tab
  }
  if (element.innerWidth > SCREEN_SIZE.tab) {
    return DEVISE.desktop
  }
}

export const dateDuration = (msc) => {
  let hours = Math.ceil(msc / (1000 * 60 * 60))
  if (hours < 24) {
    return `${hours}ч`
  }

  const days = Math.floor(hours / 24)
  hours = hours % 24

  return `${days}д ${hours}ч`
}
