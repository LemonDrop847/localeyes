import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/pages/homePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route to="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
