import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const ClientRoutes = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const userType = user.type;

  if (userType === 'customer') {
    return <Outlet />;
  } else if (userType === 'admin') {
    return <Navigate to="/admin-dashboard" />;
  } else if (userType === 'vendor') {
    return <Navigate to="/vendor-dashboard" />;
  } else {
    return <Navigate to="/unauthorized" />;
  }
};



export default ClientRoutes
