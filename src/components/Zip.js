import { useContext, useRef } from 'react';
import { ZipContext } from '../context/Context';
import { Row, Col } from 'react-bootstrap';
import './styles/Zip.scss';

export default function Zip() {
    const [ zipCode, setZipCode ] = useContext(ZipContext);

    const zipForm = useRef(null);

    const handleUpdatekEvent = () => {
        const form = zipForm.current;
        setZipCode(`${form['zip'].value}`)
     };

     const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleUpdatekEvent();
        };
      };

    return (
        <>
            <Row className='justify-content-center'>
                <Col xs='auto' className='zipDiv'>
                    <p id='zipCodeLabel'>Zip Code:</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs='auto' className='no-padding'>
                    <form ref={zipForm}>
                        <input type='text' label={'zip'} name={'zip'} id='zipCodeInput' defaultValue={zipCode} onKeyDown={handleKeyDown} />
                    </form>
                </Col>
                <Col xs='auto'>
                    <button type='button' id='zipCodeButton' onClick={() => {handleUpdatekEvent()}}>Update</button>
                </Col>
            </Row>
        </>
    );
};