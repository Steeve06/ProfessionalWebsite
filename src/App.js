import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
// Import other pages as you build them

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Note: Path names should be lowercase /services 
             to match your Navbar's <NavLink to="/services">
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;