import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, Signup } from './pages'
import { Bounce, ToastContainer } from 'react-toastify'
import VendorDashboard from './pages/vendor/dash'
import VendorRestaurant from './pages/vendor/restaurant'


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='vendor/dash' element={<VendorDashboard />} />
        <Route path='/vendor-restaurant' element={<VendorRestaurant />} />
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
