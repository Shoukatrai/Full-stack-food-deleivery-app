import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, Signup } from '../pages'

function App() {

  return (
    <>
        <Routes>
          <Route index element ={<Login />} />
          <Route path='signup' element ={<Signup />} />
        </Routes>
    </>
  )
}

export default App
