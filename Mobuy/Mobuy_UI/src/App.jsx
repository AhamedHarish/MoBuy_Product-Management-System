import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import AddProduct from './component/AddProduct'
import EditProduct from './component/EditProduct'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
        <Route path='/editProduct/:id' element={<EditProduct/>}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App