import { Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return(
    <div>
      <Navbar/>
    <Routes>
      <Route path="/">{HomePage}</Route>
      <Route path="/Product/:id">{ProductPage}</Route>
      </Routes>
    <Footer/>
    </div>
  )
}


export default App