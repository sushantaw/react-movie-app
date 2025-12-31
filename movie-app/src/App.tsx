
import './css/App.css';
import Favourite from './Pages/favourite';
import Home from './Pages/home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';

function App() {
  return(
    <div>
    <NavBar />
    <main className = "main-content" >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </main>
    </div>
  );
}

export default App
