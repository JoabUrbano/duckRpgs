import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home.js'
import Sobre from './components/pages/Sobre.js'
import './App.css';
import NavBar from './components/layout/NavBar.js';
import Footer from './components/layout/Footer.js';
import BuscarMagias from './components/pages/BuscarMagias.js';
import SistemaXp from './components/pages/SistemaXp.js';

function App() {
  return (
    <Router>
      
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/buscarmagias" element={<BuscarMagias />} />
        <Route path="/sistemaxp" element={<SistemaXp />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
