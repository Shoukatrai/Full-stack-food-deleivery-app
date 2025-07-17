import React, { useEffect, useState } from 'react'
import VendorLayout from '../../../components/vendorLayout'
import { Button, Grid, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { AddResModal } from '../../../components/addResModal';
import RestaurantCard from '../../../components/RestaurantCard';
import { BASE_URL, toastAlert } from '../../../utils';
import axios from 'axios';
import Cookies from "js-cookie"
const VendorRestaurant = () => {
  const [isRefresh, setIsRefresh] = useState(false)
  const [restaurants, setRestaurants] = useState([])
  const [addResModal, setAddResModal] = React.useState(false);


  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/restaurant/vendor-restaurant`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")} `
        }
      })
      setRestaurants(response.data.data)
    } catch (error) {
      toastAlert({
        type: "error",
        message: error.message
      })
    }
  }


  useEffect(() => {
    fetchData()
  }, [isRefresh])



  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <VendorLayout>
        <Stack flexDirection={"row"} gap={3} spacing={2} sx={{ mt: 2 }} flexWrap={"wrap"}>
          {restaurants.map((restaurant) => (

            <RestaurantCard restaurant={restaurant} key={restaurant._id} />

          ))}
        </Stack>
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            borderRadius: '50%',
            minWidth: 56,
            minHeight: 56,
            boxShadow: 3,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setAddResModal(true)}
        >
          <AddIcon fontSize="large" />
        </Button>
        <AddResModal
          open={addResModal}
          setOpen={setAddResModal}
          isRefresh={isRefresh}
          setIsRefresh={setIsRefresh}
        />
      </VendorLayout>
    </div>
  )
}

export default VendorRestaurant
