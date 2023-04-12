import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CarsDetails from './components/CarsDetails'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars/:id' element={<CarsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
