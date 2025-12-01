import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="context">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
