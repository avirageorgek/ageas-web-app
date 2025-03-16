import { useState } from 'react'
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import CustomButton from './components/CustomButton';
import {searchLocations} from "./actions/geolocation";
import WeatherDetailsItem from './components/WeatherDetailsItem';

function App() {

  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const searchLocation = async () => {
    if(!currentLocation) {
      setErrorMessage("Please enter a location");
      return
    }

    setErrorMessage("");
    let result = await searchLocations(currentLocation);

    console.log("Result from backend: ", result)

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
      {/* <div className='flex flex-row justify-center py-50'>
        <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 gap-10">
          <WeatherDetailsItem />
          <WeatherDetailsItem />
          <WeatherDetailsItem />
          <WeatherDetailsItem />
          <WeatherDetailsItem />
        </div>
            
      </div> */}
    </>
  )
}

export default App
