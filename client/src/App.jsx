import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, Signup } from './pages'
import { Bounce, ToastContainer } from 'react-toastify'
import VendorDashboard from './pages/vendor/dash'
import VendorRestaurant from './pages/vendor/restaurant'
import Order from './pages/vendor/order'
import Menu from './pages/vendor/menu'
import AuthRoutes from './routes/AuthRoutes'
import VendorRoutes from './routes/VendorRoutes'



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
          <Route path='/vendor-menu' element={<Menu />} />
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
