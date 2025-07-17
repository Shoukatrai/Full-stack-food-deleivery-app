import React from 'react'
import VendorLayout from '../../../components/vendorLayout'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const VendorRestaurant = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <VendorLayout>
        <h1>Vendor Restaurant</h1>
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
        >
          <AddIcon fontSize="large" />
        </Button>
      </VendorLayout>
    </div>
  )
}

export default VendorRestaurant
