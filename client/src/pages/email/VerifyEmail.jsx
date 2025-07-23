import React from 'react';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import { BASE_URL, toastAlert } from '../../utils';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import apiEndPoints from '../../constant/apiEndPoints';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
const navigate = useNavigate()
    const onSubmit = async (obj) => {
        console.log(obj)
        try {
            const api = `${BASE_URL}${apiEndPoints.verifyEmail}`
            const response = await axios.patch(api, obj)
            console.log("email response", response)
            if (response.data.status === false) {
                toastAlert({
                    type: "error",
                    message: response.data.message
                })
            } else {
                toastAlert({
                    type: "success",
                    message: response.data.message
                })
                navigate("/login")
            }

        } catch (error) {
            toastAlert({
                type: "error",
                message: error.message
            })
        }
    }

    const { control, reset, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            otp: ""
        }
    })
    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 3,
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                }}

            >
                <Typography
                    variant="h5"
                    fontWeight={700}
                    textAlign="center"
                    mb={2}
                    color="primary"
                >
                    Email Verification
                </Typography>
                <Typography variant="body2" textAlign="center" mb={3}>
                    Please enter the verification code sent to your email.
                </Typography>
                <Stack spacing={2} component={"form"} onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="otp"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                label="Verification Code"
                                variant="outlined"
                                fullWidth
                                {...field}
                            />
                        )}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ fontWeight: 600, py: 1.2 }}
                        type='submit'
                    >
                        Verify
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default VerifyEmail;
