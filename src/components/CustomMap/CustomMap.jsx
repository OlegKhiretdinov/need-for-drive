import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Map, Placemark, YMaps } from "react-yandex-maps"
import { YandexKey } from "../../keys"

const CustomMap = () => {
  const { city, point, pointList } = useSelector((state) => state.location)

  const [yMap, setYMap] = useState()
  const [pointsCoordinate, setPointCoordinates] = useState([])
  const [mapCenter, setMapCenter] = useState([55.751574, 37.573856])

  useEffect(() => {
    if (city.id && point.id) {
      yMap?.geocode(`${point.cityId.name}, ${point.address}`).then((data) => {
        setMapCenter(data.geoObjects.get(0).geometry.getCoordinates())
      })
    }
    if (city.id) {
      yMap?.geocode(`${city.name}`).then((data) => {
        setMapCenter(data.geoObjects.get(0).geometry.getCoordinates())
      })
    }
  }, [city, point])

  useEffect(() => {
    const coordinate = []
    pointList.forEach((point) => {
      yMap?.geocode(`${point.cityId.name}, ${point.address}`).then((data) => {
        coordinate.push(data.geoObjects.get(0).geometry.getCoordinates())
        setPointCoordinates(coordinate)
      })
    })
  }, [pointList, yMap])

  return (
    <YMaps
      query={{
        ns: "geocode",
        apikey: YandexKey,
        load: ["geocode"],
      }}
    >
      <Map
        onLoad={(yMap) => setYMap(yMap)}
        state={{
          center: mapCenter,
          zoom: 13,
        }}
        width="100%"
        height="350px"
      >
        {pointsCoordinate.map((point, index) => (
          <Placemark key={index} geometry={point} />
        ))}
      </Map>
    </YMaps>
  )
}

export default CustomMap
