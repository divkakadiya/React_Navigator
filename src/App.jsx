import './App.css'
import { Route, Routes } from 'react-router-dom'
import Product from './get-api/Product';
import Navbar from './get-api/Navbar';
import Home from './get-api/Home';
import Details from './get-api/Details';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/product' exact element={<Product />} />
        <Route path='/:id' exact element={<Details />} />
      </Routes>
    </>
  )
}

export default App
