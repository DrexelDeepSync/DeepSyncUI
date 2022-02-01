import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HeroSection from './components/HeroSection';
import ProjectCreation from './components/ProjectCreation';
import UploadInformation from './components/UploadInformation';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/'/>
          <Route exact path="/project-creation" component={ProjectCreation} />
          <Route exact path="/upload-information" component={UploadInformation} />

        </Switch>
        <HeroSection></HeroSection>
      </Router>
    </>
  );
}

export default App;
