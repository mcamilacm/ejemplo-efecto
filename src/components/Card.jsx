import amanecer from "../img/amanecer.png";
import altatemperatura from "../img/alta-temperatura.png";
import bajatemperatura from "../img/baja-temperatura.png";
import calibre from "../img/calibre.png";
import nube from "../img/nube.png";

const Card = ({ weatherInfo }) => {
  console.log(weatherInfo);
  return weatherInfo ? (
    <>
      <div className="grid_container">


        <div className="card_data">
          <h2>Temp Max</h2>
          <img src={altatemperatura} alt="Weather icon" width="100px" />
          <p> {weatherInfo.main.temp_max}</p>
        </div>


        <div className="card_data">
          <h2>Temp Min</h2>
          <img src={bajatemperatura} alt="Weather icon" width="100px" />
          <p> {weatherInfo.main.temp_min}</p>
        </div>


        <div className="card_data">
          <h2>Wind</h2>
          <img src={nube} alt="Weather icon" width="100px" />
          <p> {weatherInfo.wind.speed}k/h</p>
        </div>

        <div className="card_data">
          <h2>Pressure</h2>
          <img src={calibre} alt="Weather icon" width="100px" />
          <p> {weatherInfo.main.pressure}</p>
        </div>

      </div>


    </>
  ) : null;
};

export default Card;
