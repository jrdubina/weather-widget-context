import { ContextWeather } from './context/ContextWeather';
import Header from './components/Header';
import Temperatures from './components/Temperatures';
import Zip from './components/Zip';
import { Container } from 'react-bootstrap'
import './App.scss';


function App() {
  return (
    <ContextWeather>
      <Container>
        <Header />
        <Temperatures />
        <hr />
        <Zip />
        </Container>
    </ContextWeather>
  );
}

export default App;
