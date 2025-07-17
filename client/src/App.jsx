import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, Signup } from './pages'
import { Bounce, ToastContainer } from 'react-toastify'
import VendorDashboard from './pages/vendor/dash'
import VendorRestaurant from './pages/vendor/restaurant'
import Order from './pages/vendor/order'
import Menu from './pages/vendor/menu'



function App() {

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='/vendor-dashboard' element={<VendorDashboard />} />
        <Route path='/vendor-restaurant' element={<VendorRestaurant />} />
        <Route path='/vendor-order' element={<Order />} />
        <Route path='/vendor-menu' element={<Menu />} />
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
