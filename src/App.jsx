import { useContext, useState } from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Project from './Project';
import Products from './pages/Products';
import Layout from './components/Layout';
import { CartProvider } from './context/CartContext';
import About from './pages/About';
import Home from './pages/Home';
import MovieLists from './components/MovieLists';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';


// import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import {  AuthProvider } from './context/AuthContext';
import AppRoutes from './components/AppRoutes';
function App() {
 
  return (
//     <BrowserRouter>
//     <AuthProvider>
//    <AppRoutes/>
// </AuthProvider>
// </BrowserRouter>
    <BrowserRouter>
     <AuthProvider>
    <CartProvider>
      <AppRoutes/>
    </CartProvider>
    </AuthProvider>
     </BrowserRouter>
  )
}

export default App
