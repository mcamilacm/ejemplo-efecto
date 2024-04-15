import shadowImage from "../img/nublado.png";
import sun from "../img/sun.png";
import cloudy from "../img/cloudy.png";
import storm from "../img/storm.png";
import snowy from "../img/snowy-2.png";
import mist from "../img/mist.png";
import carbon from "../img/carbon-dioxide.png";

const imgByWeatherConditions = {
  Clear: sun,
  Clouds:shadowImage,
  Rain: cloudy,
  Thunderstorm: storm,
  Snow: snowy,
  Mist: mist,
  Smoke: carbon,
  default: shadowImage,
};

const Data = ({ weatherData }) => {
  console.log(weatherData);
  const {
    weather = [],
    name = "",
    main: mainWeather = {},
  } = { ...weatherData };
  const { temp = "", humidity = "", feels_like = "" } = { ...mainWeather };
  const [conditions = {}] = [...weather];
  const { description = "", main = "" } = { ...conditions };
  return weatherData ? (
    <div>
      <div className="data_container">
        <div className="first_container">
          <h1>{name}</h1>
          <p> {description}</p>
        </div>
        <div className="second_container">
          <img
            src={
              imgByWeatherConditions[main]
                ? imgByWeatherConditions[main]
                : imgByWeatherConditions.default
            }
            alt="Weather icon"
            width="300px"
          />
        </div>
        <div className="third_container">
          <h1> {temp}°C</h1>
          <p>Feels Like: {feels_like}%</p>
          <p>Humidity: {humidity}%</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Data;
