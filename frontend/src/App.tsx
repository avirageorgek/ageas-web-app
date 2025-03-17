import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {updateLocation} from "./stores/location";
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import CustomButton from './components/CustomButton';
import {searchLocations} from "./actions/geolocation";
import { getWeatherData } from './actions/weather';
import WeatherDetailsItem from './components/WeatherDetailsItem';
import { WeatherObject } from './types/generic';
import { WEATHER_ICONS } from './constants/weatherIcons';
import MessageDisplayer from './components/MessageDisplayer';

function App() {
  const currentLocation = useSelector((state) => state.location.currentLocation);
  const currentLongitude = useSelector((state) => state.location.currentLongitude);
  const currentLatitude = useSelector((state) => state.location.currentLatitude);
  const dispatch = useDispatch()
  const [localLocation, setLocalLocation] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherObject[] | null>(null);

  useEffect(() => {
    (async () => {
      if(currentLongitude && currentLongitude) {
        await getWeatherDetails(currentLatitude, currentLongitude, 5);
      }
    })()
    
  }, [currentLocation, currentLongitude, currentLatitude]);

  const submitLocation = async () => {
    if(!localLocation) {
      setErrorMessage("Please enter a location");
      return
    }

    setErrorMessage("");
    let result = await searchLocations(localLocation);
    if(result && result.length > 0) {
      dispatch(updateLocation({
        currentLocation: localLocation,
        currentLongitude: result[0].longitude,
        currentLatitude: result[0].latitude
      }));
      await getWeatherDetails(result[0].latitude, result[0].longitude, 5);
    } else {
      dispatch(updateLocation({
        currentLocation: null,
        currentLongitude: null,
        currentLatitude: null
      }));
      setWeatherData([])
    }

  }

  const getWeatherDetails = async (latitude: number, longitude: number, days: number) =>  {
    let data = await getWeatherData(latitude, longitude, days);
    if(data) {
      setWeatherData(data.formattedData);
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
              setLocalLocation(e.target.value);
            }}/>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
          </div>
          <CustomButton onClick={submitLocation}/>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-10'>
        {
          currentLocation && 
              <><label>Current Location: </label>{currentLocation}  </>
        }
      </div>
      {
       (weatherData && weatherData.length <= 0) &&
        <MessageDisplayer message='No data available' messageType='info'/>
      }
      <div className='flex flex-row justify-center pt-20'>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-10">
          
          {
            weatherData && weatherData.map((weather) => {
              return (<WeatherDetailsItem key={weather.date} date={weather.date} weatherIcon={WEATHER_ICONS[weather.weatherCode]}
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
