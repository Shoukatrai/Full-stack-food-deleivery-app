import React, { useEffect } from 'react'
import Navbar from '../../../components/navbar'
import { BASE_URL } from '../../../utils'
import apiEndPoints from '../../../constant/apiEndPoints'
import axios from 'axios'
import Cookies from "js-cookie"

const Cart = () => {
    const fetchAllOrders = async ()=>{
        try {
            const api = `${BASE_URL}${apiEndPoints.fecthAllOrders}`
            axios.get(api , {
                headers: {
                    Authorization : `Bearer ${Cookies.get("token")}`
                }
            })
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchAllOrders()
    },[])
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Cart
