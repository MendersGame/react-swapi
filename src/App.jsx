import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Nav.jsx'
import Starships from './components/Starships.jsx'
import StarshipDetails from './components/StarshipDetails'

function App() {
    return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Starships />} />
        <Route path='/starships/:starshipId' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
