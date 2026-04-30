import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Project from './Project';
// import Products from './pages/Products';
// import Layout from './components/Layout';
// import { CartProvider } from './context/CartContext';
// import About from './pages/About';
// import Home from './pages/Home';
// import MovieLists from './components/MovieLists';
// import Contact from './pages/Contact';
// import ProductDetails from './pages/ProductDetails';


import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
function App() {
  

  return (
    <BrowserRouter>
    <Layout>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/profile" element={<UserProfile />} />
  </Routes>
</Layout>
</BrowserRouter>
    // <BrowserRouter>
    // <CartProvider>
    //    <Layout >
     
    //     <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/products" element={<Products />} />
    //         <Route path="/products/:productId" element={<ProductDetails />} />
    //         <Route path="/contact" element={<Contact />} />
             
    //       </Routes>
    // </Layout>
    // </CartProvider>
    
    //  </BrowserRouter>
  )
}

export default App
