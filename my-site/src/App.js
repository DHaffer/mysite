import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Navbar';
import Home from './Home';
import Blog from './Blog';
import Music from './Music';
import About from './About';
import Contact from './Contact';



function App() {
  return (
   <Router>
      <div className="App">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/blog" element={ <Blog /> } />
            <Route exact path="/music" element={ <Music /> } />
            <Route exact path="/about" element={ <About /> } />
            <Route exact path="/contact" element={ <Contact /> } />
          </Routes>
        </div>
      </div>
   </Router>
  
  );
}

export default App;
