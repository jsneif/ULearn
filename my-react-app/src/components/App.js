import '../App.css';
import logo from "../Images/ULearnLogo.png";
import About from "./About.js";



import {Nav} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="Logo-image" src={logo} alt="Logo"/>
      </header>
        <About/>
      <footer className='App-footer'>
        Contact us at ULearnWithUs.edu@gmail.com
      </footer>
    </div>
  );
}

export default App;
