// App.js
import React, { useState, useEffect } from 'react';
import Searcher from './components/Searcher';
import Data from './components/Data';
import Card from './components/Card';


const API_KEY = '68fdb552cf72454f631ab609705b3ae7';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Por defecto, muestra el clima de Cali al cargar la aplicación
    fetchData('Denver');
  }, []);

  const fetchData = async (city) => {
    console.log('Búsqueda de ciudad:', city); // Verificar que city sea correcto
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setWeatherData(data);
      } else {
        console.error('Error al obtener los datos del clima');
      }
    } catch (error) {
      console.error('Error al obtener los datos del clima', error);
    }
  };

  const searchPlaces = (term) => {
    console.log('Término de búsqueda:', term); // Verificar que searchTerm sea correcto
    // Llama a fetchData con el término de búsqueda ingresado por el usuario
    fetchData(term);
  };
console.log(weatherData);
  return (
    <div className='root_container'>
      <div className="main_container">
        <div className="searcher_container">
      <Searcher onSearch={searchPlaces} />
      </div>

      <div className="data_weather">
      <Data weatherData={weatherData} />
      </div>

      <div className ="card_content">
<Card weatherInfo ={weatherData}  ></Card>
      </div>
      </div>
   
    </div>
  );
}

export default App;