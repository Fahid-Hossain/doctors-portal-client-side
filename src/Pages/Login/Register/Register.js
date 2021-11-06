import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginImg from "../../../images/login.png";
import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    //
    const { RegisterUserWithEmailAndPass, isLoading, user, error } = useAuth();
    //
    const history = useHistory();

    //handleLogin submit 
    const handleOnBlur = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match");
            return;
        }
        if (loginData.password.length < 6) {
            alert("password must be at least 6 characters")
            return;
        }
        //registrations
        RegisterUserWithEmailAndPass(loginData.name,loginData.email, loginData.password,history);
    }
    //textField value
    const textFieldHandler = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        // console.log(email, pass)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    {
                        !isLoading && <form onSubmit={handleOnBlur} >
                            <Typography sx={{ mt: 15, color: "#26c6da" }} variant="h5" gutterBottom component="div">
                                Register
                            </Typography>
                            <TextField
                                onChange={textFieldHandler}
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="You Name"
                                name="name"
                                variant="standard" />
                            <TextField
                                onChange={textFieldHandler}
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="You Email"
                                type="email"
                                name="email"
                                variant="standard" />
                           
                            <TextField
                                onChange={textFieldHandler}
                                sx={{ width: "75%", m: 1 }}
                                // id="standard-password-input"
                                label="Your Password"
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField
                                onChange={textFieldHandler}
                                sx={{ width: "75%", m: 1 }}
                                // id="standard-password-input"
                                label="Confirm Password"
                                type="password"
                                name="password2"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <Button type="submit" sx={{ backgroundColor: '#26c6da', my: 2 }} variant="contained">Register</Button>
                            <br />
                            <span>Already Registered ?</span>
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button>PLEASE LOGIN</Button>
                            </NavLink>
                        </form>
                    }
                    {
                        isLoading && <CircularProgress />
                    }
                    {/* //Register success message */}
                    {
                        user?.email && <Alert severity="success">Your Registration successfully Done!</Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} alt="" style={{ width: '78%' }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;