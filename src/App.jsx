import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import RecetasContainer from './components/RecetasContainer'
import Formulario from './components/Formulario'
import AdminRecetas from './components/AdminRecetas'

function App() {

  return (
  <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<AdminRecetas/>} />
        <Route path="/recetas" element={<RecetasContainer/>} />
        <Route path="/formulario" element={<Formulario/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
