import './App.css';
import FullNavbar from './components/FullNavbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HeroSection from './components/HeroSection';
import Team from './components/Team';
import GettingStarted from './components/GettingStarted';
import Plans from './components/Plans';
import SlowAudio from './components/SlowAudio';

function App() {
  return (
    <>
      <Router>
        <FullNavbar />
  
        <Switch>
          <Route exact path = '/' component={HeroSection}/>
          <Route exact path="/about" component={Team} />
          <Route exact path="/getting-started" component={GettingStarted} />
          <Route exact path="/project-creation" component={SlowAudio} />
          <Route exact path="/slow-audio" component={SlowAudio}/>

        </Switch>
        {     /*<HeroSection></HeroSection>
        <GettingStarted></GettingStarted>
        <Plans></Plans>
        <Team></Team>
        <ProjectCreation></ProjectCreation> */}
      </Router>
    </>
  );
}

export default App;
