import React from 'react'
import Cookies from "js-cookie"
import { Navigate, Outlet } from 'react-router-dom'
const AuthRoutes = () => {
  return (
    !Cookies.get("token") ? <Outlet /> : <Navigate to={"/vendor-dashboard"}/>
  )
}

export default AuthRoutes
