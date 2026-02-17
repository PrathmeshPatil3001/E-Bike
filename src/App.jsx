// import { useState } from 'react'

// import './App.css'


import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Brands from './components/Brands';
import BrandProducts from "./components/AllProducts";
import Adminlogin from './components/admin/Adminlogin';
import Addproduct from './components/admin/Addproduct';
import Products from './components/admin/Products';
import Dashboard from './components/admin/Dashboard';
import Layout from './components/admin/Layout';
import Contact from './components/Contact';
import AllProducts from './components/AllProducts';





function App() {

  return (
    <>
      <div className="App">


        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />} />
             <Route path='/brands' element={<Brands />} />
             <Route path="/brands/:brandName" element={<AllProducts />} />
               <Route path='/contact' element={<Contact />} />
             <Route path='/adminlogin' element={<Adminlogin />} />

            <Route path='/admin' element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path='/admin/addproduct/' element={<Addproduct/>} />
              <Route path='/admin/addproduct/:id' element={<Addproduct />} />
              <Route path='/admin/products/' element={<Products />} />
             
          </Route>
          </Routes>
          <Footer />
        </BrowserRouter>




        {/* <Header />
        <Home />
        <About/>
        <Gallery />
        <Style />
        <Contact/> 
        <Footer /> */}



        
        
      </div>
    </>
  )
}

export default App
