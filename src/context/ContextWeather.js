import { useState, useEffect } from 'react';
import { WeatherContext, ZipContext } from './Context';
import { getWeather } from '../services/axiosService';

export const ContextWeather = ({children}) => {
    const [ zipCode, setZipCode ] = useState('10036');
    const [ weatherData, setWeatherData ] = useState({});
  
    useEffect(async () =>{
        const weather = await getWeather(zipCode).then(response => {return (response.data)});

        setWeatherData(weather);
      },[zipCode]);

      return(
    <WeatherContext.Provider value={[ weatherData, setWeatherData ]}>
        <ZipContext.Provider value={[ zipCode, setZipCode]}>
           {children}
        </ZipContext.Provider>
    </WeatherContext.Provider>
   );
};