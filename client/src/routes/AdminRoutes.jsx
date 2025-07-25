import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const userType = user.type;

  if (userType === 'admin') {
    return <Outlet />;
  } else if (userType === 'customer') {
    return <Navigate to="/" />;
  } else if (userType === 'vendor') {
    return <Navigate to="/vendor-dashboard" />;
  } else {
    return <Navigate to="/unauthorized" />; 
  }
};

export default AdminRoutes;
