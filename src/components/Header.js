import { useContext } from 'react';
import { WeatherContext } from '../context/Context';
import { Row, Col } from 'react-bootstrap';
import './styles/Header.scss';

export default function Header() {
    const [ weatherData ] = useContext(WeatherContext);
    const weatherDetails = weatherData?.weather ? weatherData?.weather[0] : undefined;

    return (
        <>
            <Row className='justify-content-center'>
                <Col xs='auto' className='no-padding'>
                    <h1>{weatherData?.name}</h1>
                </Col>
                <Col xs='auto' className='no-padding'>
                    <img src={`http://openweathermap.org/img/wn/${weatherDetails?.icon}.png`} />
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <p id='weatherDescription'>{weatherDetails?.description}</p>
            </Row>
        </>
    );
};