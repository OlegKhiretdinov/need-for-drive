import { defaultCategoryFilter } from "../utils/const"

const baseUrl = "https://api-factory.simbirsoft1.com/api/"

const headers = {
  "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
  "Content-Type": "application/json",
}

export const getCityList = () => {
  return fetch(`${baseUrl}db/city`, { method: "GET", headers }).then(
    (response) => response.json()
  )
}

export const getPointList = (cityId) => {
  const filter = cityId ? `?cityId=${cityId}` : ""
  return fetch(`${baseUrl}db/point${filter}`, { method: "GET", headers }).then(
    (response) => response.json()
  )
}

export const categoryListQuery = () => {
  return fetch(`${baseUrl}db/category`, { method: "GET", headers }).then(
    (response) => response.json()
  )
}

export const modelListQuery = (filterId) => {
  const suffix =
    filterId === defaultCategoryFilter.id ? "" : `categoryId[id]=${filterId}`
  return fetch(`${baseUrl}db/car?${suffix}&page=1&limit=1`, {
    method: "GET",
    headers,
  }).then((response) => response.json())
}

export const rateQuery = () => {
  return fetch(`${baseUrl}db/rate`, { method: "GET", headers }).then(
    (response) => response.json()
  )
}
