import { useState } from 'react'

import Project from './Project';
import Products from './pages/Products';
import Layout from './components/Layout';
import { CartProvider } from './context/CartContext';

function App() {
  

  return (
    <>
    <CartProvider>
       <Layout >
      <Products />
    </Layout>
    </CartProvider>
    
     </>
  )
}

export default App
