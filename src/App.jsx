import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Project from './Project';
import Products from './pages/Products';
import Layout from './components/Layout';
import { CartProvider } from './context/CartContext';
import About from './pages/About';

function App() {
  

  return (
    <BrowserRouter>
    <CartProvider>
       <Layout >
     
        <Routes>
            <Route path="/" element={<Products />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
    </Layout>
    </CartProvider>
    
     </BrowserRouter>
  )
}

export default App
