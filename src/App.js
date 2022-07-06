import './App.css';
import React from 'react'
import { BrowserRouter ,Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Home'
import Aboutpage from './pages/About'
import Docspage from './pages/Docs'
const App = () => {
  return (
    <BrowserRouter>
    <Link to="/"><h3>Home</h3></Link>
      <Link to="/about"><h3>About</h3></Link>
      <Link to="/docs"><h3>Docs</h3></Link>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path='/about' element={<Aboutpage />}></Route>
        <Route path='/docs' element={<Docspage />}></Route>
        <Route path='*' element={<h1>There's nothing here</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
