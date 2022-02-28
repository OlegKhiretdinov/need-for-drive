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
