import { Stack, TextField, Typography, Container, Paper, Button, CircularProgress } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form"
import axios from 'axios'
import { BASE_URL, toastAlert } from '../../utils'
import { useState } from 'react'

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            phoneNumber: "",
            gender: "",
            type: "",
        }
    })
    const onSubmit = async (obj) => {
        try {
            setLoading(true)
            obj.type = "admin"
            console.log("obj", obj)
            const response = await axios.post(`${BASE_URL}/auth/signup`, obj)
            console.log("response", response.data)
            setLoading(false)
            if (!response.data.status) {
                toastAlert({
                    type: "error",
                    message: response.data.message
                })
            } else {
                toastAlert({
                    type: "success",
                    message: response.data.message
                })
                navigate("/")
            }
        } catch (error) {
            setLoading(false)
            toastAlert({
                type: "error",
                message: error.message
            })

        }
    }



    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper elevation={4} sx={{ p: 4, width: '100%', borderRadius: 3 }}>
                <Stack gap={3} component={"form"} onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h4" align="center" fontWeight={700} color="primary">
                        SINGUP
                    </Typography>
                    <Controller
                        control={control}
                        render={({ field, formState: { errors } }) => (<TextField
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            required
                            {...field}
                        />
                        )}
                        name="fullName"
                    />
                    <Controller
                        control={control}
                        render={({ field, formState: { errors } }) => (<TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            fullWidth
                            required
                            {...field}
                        />
                        )}
                        name="email"
                    />
                    <Controller
                        control={control}
                        render={({ field, formState: { errors } }) => (<TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            required
                            {...field}
                            type='password'
                        />
                        )}
                        name="password"
                    />
                    <Controller
                        control={control}
                        render={({ field, formState: { errors } }) => (<TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            required
                            type='number'
                            {...field}
                        />
                        )}
                        name="phoneNumber"
                    />
                    <Controller
                        control={control}
                        render={({ field, formState: { errors } }) => (<TextField
                            label="Gender"
                            variant="outlined"
                            fullWidth
                            required
                            {...field}
                        />
                        )}
                        name="gender"
                    />

                    <Typography variant="body1" align="center" fontWeight={700} color="primary">
                        Have an account? {' '}
                       <Link to={"/"}>Login</Link>
                       
                        {/* <MuiLink
                            component={RouterLink}
                            to="signup"
                            sx={{
                                color: 'secondary.main',
                                textDecoration: 'underline',
                                fontWeight: 700,
                                '&:hover': {
                                    color: 'primary.main',
                                    textDecoration: 'none',
                                },
                            }}
                        > Login </MuiLink> */}
                    </Typography>
                    <Button variant="contained" color="primary" size="large" sx={{
                        mt: 2,
                        color: 'white',
                        display: 'flex',
                        gap: "20px"
                    }} type='submit' >
                        {loading ? <CircularProgress color='white' size={20} /> : "SignUP"}
                    </Button>
                </Stack>
            </Paper>
        </Container>
    )
}

export default Signup
