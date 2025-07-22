import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login, Signup } from './pages'
import { Bounce, ToastContainer } from 'react-toastify'
import { ClientDash } from './pages/client'
import { AdminDashboard, Menues, Orders, Restaurants, Users, Vendors } from './pages/admin'
import { VendoMenu, Order, VendorDashboard, VendorRestaurant } from './pages/vendor'
import { AdminRoutes, AuthRoutes, VendorRoutes , ClientRoutes } from './routes'




function App() {

  return (
    <>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route index element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>

        <Route element={<VendorRoutes />}>
          <Route path='/vendor-dashboard' element={<VendorDashboard />} />
          <Route path='/vendor-restaurant' element={<VendorRestaurant />} />
          <Route path='/vendor-order' element={<Order />} />
          <Route path='/vendor-menu' element={<VendoMenu />} />
        </Route>

        <Route element={<AdminRoutes />}>
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/admin-restaurants' element={<Restaurants />} />
          <Route path='/admin-orders' element={<Orders />} />
          <Route path='/admin-users' element={<Users />} />
          <Route path='/admin-menus' element={<Menues />} />
          <Route path=' /admin-vendors' element={<Vendors />} />
         

        </Route>

        <Route element={<ClientRoutes />}>
          <Route path='/client-dashboard' element={<ClientDash />} />

        </Route>


        
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
