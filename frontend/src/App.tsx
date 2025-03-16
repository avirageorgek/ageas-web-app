import { useState } from 'react'
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import CustomButton from './components/CustomButton';
import {searchLocations} from "./actions/geolocation";
import { getWeatherData } from './actions/weather';
import WeatherDetailsItem from './components/WeatherDetailsItem';
import { WeatherObject } from './types/generic';
import { WEATHER_ICONS } from './constants/weatherIcons';

function App() {

  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherObject[]>([]);

  const searchLocation = async () => {
    if(!currentLocation) {
      setErrorMessage("Please enter a location");
      return
    }

    setErrorMessage("");
    let result = await searchLocations(currentLocation);
    console.log("Final: ",result)
    if(result && result.length > 0) {
      console.log("Result here");
      let data = await getWeatherData(result[0].latitude, result[0].longitude, 5);
      if(data) {
        setWeatherData(data.formattedData);
      }

    }

  }

  return (
    <>
      <div className='flex justify-center items-center h-20'>
        <Header title='SkyCast'/>
      </div>
      <div className='flex flex-col items-center w-full'>
        <div className="flex justify-center items-end h-32  space-x-4">
          <div className='flex flex-col items-center'>
            <SearchBox title='Enter a Location' onChange={(e) => {
              setCurrentLocation(e.target.value);
            }}/>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
          </div>
          <CustomButton onClick={searchLocation}/>
        </div>
      </div>
      <div className='flex flex-row justify-center py-50'>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {
            weatherData.map((weather) => {
              return (<WeatherDetailsItem date={weather.date} weatherIcon={WEATHER_ICONS[weather.weatherCode]}
                description={weather.weatherDescription} temperatureMin={weather.temperatureMin} 
                temperatureMax={weather.temperatureMax} windSpeedMin={weather.windSpeedMin}
                windSpeedMax={weather.windSpeedMax}
              />)
            })
            
          }
        </div>
            
      </div>
    </>
  )
}

export default App
