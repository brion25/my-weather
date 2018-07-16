import { getJSON } from '../../common/utils/fetch'

export const getCurrentWeather = (lat, lon) =>
  getJSON(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_TOKEN}`)
