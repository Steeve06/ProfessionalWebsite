import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/"         element={<Homepage />}     />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about"    element={<AboutPage />}    />
          <Route path="/projects" element={<ProjectPage />}  />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;