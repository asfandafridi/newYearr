import Header from '../src/Components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/HeroSection';
import Projects from './Components/Projects'; 
import SocialProfile from './Components/SocialProfile';

function App() {
  return (
     <div>
      <Header/>
      <HeroSection/>
      <Projects/>
      <SocialProfile/>
    </div>
  );
}

export default App;
