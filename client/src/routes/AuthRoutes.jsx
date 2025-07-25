import React from 'react'
import Cookies from "js-cookie"
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
const AuthRoutes = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user)

  if (user) {
    const userType = user.type;

    
    if (userType === 'admin') {
      return <Navigate to="/admin-dashboard" />;
    } else if (userType === 'vendor') {
      return <Navigate to="/vendor-dashboard" />;
    } else if (userType === 'customer') {
      return <Navigate to="/" />;
    } else {
      return <Navigate to="/unauthorized" />;
    }
  }

  
  return <Outlet />;
}

export default AuthRoutes
