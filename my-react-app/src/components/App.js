import '../App.css';
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
      <About/>
      </header>
    </div>
  );
}

export default App;
