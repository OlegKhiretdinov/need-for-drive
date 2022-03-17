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
