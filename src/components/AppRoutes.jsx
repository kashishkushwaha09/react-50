import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import UserProfile from './Profile/UserProfile';

const AppRoutes = () => {
     const authCtx=useContext(AuthContext);
      console.log("isAuthenticated",authCtx.isAuthenticated)
  return (
  
     <Layout>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/auth" element={
    authCtx.isAuthenticated ? <Navigate to="/profile" /> : <AuthPage />
  } />
    <Route
  path="/profile"
  element={
    authCtx.isAuthenticated ? <UserProfile /> : <Navigate to="/auth" />
  }
/>
  </Routes>
</Layout>
  
  )
}

export default AppRoutes