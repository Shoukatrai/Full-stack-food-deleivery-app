import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const VendorRoutes = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  const userType = user.type;

  if (userType === 'vendor') {
    return <Outlet />;
  } 

  if (userType === 'admin') {
    return <Navigate to="/admin-dashboard" />;
  } 

  if (userType === 'customer') {
    return <Navigate to="/" />;
  }

  return <Navigate to="/unauthorized" />;
};

export default VendorRoutes;
