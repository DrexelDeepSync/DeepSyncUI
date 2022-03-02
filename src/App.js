import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HeroSection from './components/HeroSection';
import Team from './components/Team';
import ProjectCreation from './components/ProjectCreation';
import UploadInformation from './components/UploadInformation';
import GettingStarted from './components/GettingStarted';
import Plans from './components/Plans';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/'/>
          <Route exact path="/about" component={Team} />
          <Route exact path="/project-creation" component={ProjectCreation} />
          <Route exact path="/upload-information" component={UploadInformation} />

        </Switch>
        <HeroSection></HeroSection>
        <GettingStarted></GettingStarted>
        <Plans></Plans>
        <Team></Team>
        <ProjectCreation></ProjectCreation>
      </Router>
    </>
  );
}

export default App;
