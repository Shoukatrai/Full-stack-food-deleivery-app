import { Stack, TextField, Typography, Container, Paper, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form"
import axios from 'axios'
import { BASE_URL } from '../../utils'

const Signup = () => {
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
    const onSubmit =async (obj)=>{
       try {
            obj.type = "admin"
            const userRes = await axios.post(`${BASE_URL}/auth/signup` , obj )
            console.log("userRes" , userRes)
       } catch (error) {
            console.log(error)
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
                        Have an account? <Link to={"/"}>Login</Link>
                    </Typography>
                    <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }} type='submit'>
                        SignUP
                    </Button>
                </Stack>
            </Paper>
        </Container>
    )
}

export default Signup
