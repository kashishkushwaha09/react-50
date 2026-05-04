import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
// import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Contact from '../pages/Contact';
import Layout from './Layout';
import AuthPage from '../pages/AuthPage';
import ProtectedRoute from './ProtectedRoute';
// import HomePage from '../pages/HomePage';
// import AuthPage from '../pages/AuthPage';
// import UserProfile from './Profile/UserProfile';

const AppRoutes = () => {
  const authCtx = useContext(AuthContext);
  console.log("isAuthenticated", authCtx.isAuthenticated)
  return (

    //      <Layout>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/auth" element={
    //     authCtx.isAuthenticated ? <Navigate to="/profile" /> : <AuthPage />
    //   } />
    //     <Route
    //   path="/profile"
    //   element={
    //     authCtx.isAuthenticated ? <UserProfile /> : <Navigate to="/auth" />
    //   }
    // />
    //   </Routes>
    // </Layout>
    <Layout >

      <Routes>
        <Route path="/login" element={authCtx.isAuthenticated ? <Navigate to="/" /> : <AuthPage />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/products/:productId"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          } />
        <Route path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          } />



      </Routes>
    </Layout>

  )
}

export default AppRoutes