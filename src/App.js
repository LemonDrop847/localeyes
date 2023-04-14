import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/pages/homePage';
import Feed from './components/pages/feedPage';
import About from './components/pages/aboutPage';
import Profile from './components/pages/profilepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
