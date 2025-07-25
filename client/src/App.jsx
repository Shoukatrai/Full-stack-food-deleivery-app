import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Signup } from './pages'
import { Bounce, ToastContainer } from 'react-toastify'
import { ClientDash, OrderFromRestaurants } from './pages/client'
import { AdminDashboard, Menues, Orders, Restaurants, Users, Vendors } from './pages/admin'
import { VendoMenu, Order, VendorDash, VendorRestaurant } from './pages/vendor'
import { AdminRoutes, AuthRoutes, VendorRoutes, ClientRoutes } from './routes'
import VerifyEmail from './pages/email/VerifyEmail'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoutes />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/user-verification' element={<VerifyEmail />} />
          </Route>

          <Route element={<VendorRoutes />}>
            <Route path='/vendor-dashboard' element={<VendorDash />} />
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
            <Route path='/admin-vendors' element={<Vendors />} />


          </Route>

          <Route index element={<ClientDash />} />
          <Route element={<ClientRoutes />}>
            <Route path='/order-now' element={<OrderFromRestaurants />} />
          </Route>



        </Routes>
      </BrowserRouter>

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
