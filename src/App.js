import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/pages/homePage';
import Feed from './components/pages/feedPage';
import About from './components/pages/aboutPage';
import Profile from './components/pages/profilepage';
import Foot from './components/reuseable/footer';
import Navbar from './components/reuseable/navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>

      <Foot/>
    </div>
  );
}

export default App;
