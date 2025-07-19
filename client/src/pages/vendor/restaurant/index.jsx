import React, { useEffect, useState } from 'react';
import VendorLayout from '../../../components/vendorLayout';
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AddResModal } from '../../../components/addResModal';
import RestaurantCard from '../../../components/RestaurantCard';
import { toastAlert } from '../../../utils';
import axios from 'axios';
import Cookies from "js-cookie";
import { UpdateResModal } from '../../../components/UpdateResModal ';


const VendorRestaurant = () => {
  const BASE_URL = process.env.REACT_APP_API_BASE
  const [isRefresh, setIsRefresh] = useState(false)
  const [restaurants, setRestaurants] = useState([])
  const [selectRestaurant, setSelectRestaurant] = useState({})
  //add res
  const [addResModal, setAddResModal] = React.useState(false);
  //edit res
  const [updateResModal, setUpdateResModal] = React.useState(false);


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
          {restaurants
            .filter((restaurant) => !restaurant?.isDeleted)
            .map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant._id} isRefresh={isRefresh}
                setIsRefresh={setIsRefresh} updateResModal={updateResModal}
                setUpdateResModal={setUpdateResModal} setSelectRestaurant = {setSelectRestaurant}/>
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
        {updateResModal && <UpdateResModal
          open={updateResModal}
          setOpen={setUpdateResModal}
          isRefresh={isRefresh}
          setIsRefresh={setIsRefresh}
          selectRestaurant = {selectRestaurant}
        />}
      </VendorLayout>
    </div>
  )
}

export default VendorRestaurant
