import './App.css';
import { Routes, Route } from 'react-router-dom';

// pages & components
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Speisekarte from './pages/Speisekarte'
import Öffnungszeiten from './pages/Öffnungszeiten'
import Kontakt from './pages/Kontakt'
import Galerie from './pages/Galerie'


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/speisekarte' element={<Speisekarte />} />
        <Route path='/öffnungszeiten' element={<Öffnungszeiten />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/galerie' element={<Galerie />} />
      </Routes>
    </div>
  );
}

export default App;
