import { useContext } from 'react';
import { WeatherContext } from '../context/Context';
import { Row, Col } from 'react-bootstrap';
import './styles/Temperatures.scss';

export default function Temperatures() {
    const [ weatherData ] = useContext(WeatherContext);

    const formatTemp = (temp) => {
        return `${Math.round(temp)}\u00b0`;
    }

    return (
        <>
            <Row className='justify-content-center'>
                <p id='temp'>{formatTemp(weatherData?.main?.temp)}</p>
            </Row>
            <Row className='justify-content-center'>
                <p className='highLowTemps'>{formatTemp(weatherData?.main?.temp_min)}</p>
                <p className='highLowTemps'>{formatTemp(weatherData?.main?.temp_max)}</p>
            </Row>
        </>
    );
};