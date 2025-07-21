import React, { useEffect, useState } from 'react'
import VendorLayout from '../../../components/vendorLayout'
import { Button, Stack } from '@mui/material'
import { Add } from '@mui/icons-material'
import { AddMenuModal } from '../../../components/AddMenu'
import axios from 'axios'
import { BASE_URL } from '../../../utils'
import apiEndPoints from '../../../constant/apiEndPoints'
import Cookies from "js-cookie"
import VendorMenuCard from '../../../components/MenuCard'


const VendoMenu = () => {
  const [addMenu, setAddMenu] = useState(false)
  const [menuData, setMenuData] = useState([])
  const fetchData = async () => {
    try {
      const api = `${BASE_URL}${apiEndPoints.fetchMenu}`
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`
        }
      })
      console.log("menu response", response)
      setMenuData(response.data.data)
    } catch (error) {
      console.log("error", error)
    }
  }

  console.log("menuData", menuData)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <VendorLayout>
        <Stack flexDirection={"row"} gap={3} spacing={2} sx={{ mt: 2 }} flexWrap={"wrap"}>
          {menuData?.map((menu) => (
            <VendorMenuCard menu={menu} key={menu._id} />
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
          onClick={() => setAddMenu(true)}
        >
          <Add fontSize="large" />
        </Button>

        {addMenu && <AddMenuModal
          open={addMenu}
          setOpen={setAddMenu}
        // isRefresh={isRefresh}
        // setIsRefresh={setIsRefresh}
        // selectRestaurant={selectRestaurant}
        />}
      </VendorLayout>
    </div>
  )
}

export default VendoMenu
