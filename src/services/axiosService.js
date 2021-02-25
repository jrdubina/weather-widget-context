import axios from 'axios';

export async function getWeather(zip) {
    const requestObject = {
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=709847967f5e54b97308c1b2cae4dee5&units=imperial`
    };

    return await axios(requestObject);
};