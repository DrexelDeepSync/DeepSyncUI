import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HeroSection from './components/HeroSection';
import GettingStarted from './components/GettingStarted';
import Plans from './components/Plans';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact />
        </Switch>
        <HeroSection></HeroSection>
        <GettingStarted></GettingStarted>
        <Plans></Plans>
      </Router>
    </>
  );
}

export default App;
