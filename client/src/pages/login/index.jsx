import { Stack, TextField, Typography, Container, Paper, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={4} sx={{ p: 4, width: '100%', borderRadius: 3 }}>
        <Stack gap={3}>
          <Typography variant="h4" align="center" fontWeight={700} color="primary">
            LOGIN
          </Typography>
          <TextField label="Email" variant="outlined" type="email" fullWidth />
          <TextField label="Password" variant="outlined" type="password" fullWidth />
          <Typography variant="body1" align="center" fontWeight={700} color="primary">
            Don't have an account? <Link to={"signup"}>Create Account</Link>
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            LOGIN
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default Login
