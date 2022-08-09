import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CharacterInfo from './pages/CharacterInfo';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character-info/:characterId" element={<CharacterInfo />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
