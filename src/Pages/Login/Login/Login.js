import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginImg from "../../../images/login.png";
import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { LoginUserWithEmailAndPass, isLoading, user, error } = useAuth();

    const { signInWithGoogle } = useAuth();

    //for redirect 
    const location = useLocation();
    const history = useHistory();

    //handleLogin submit 
    const handleLogin = (e) => {
        e.preventDefault();
        //login user
        LoginUserWithEmailAndPass(loginData.email, loginData.password,location,history);
    }
    //textField value
    const textFieldHandler = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        // console.log(email, pass)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    //handle googleSignIn 
    const handleGoogleSignIn =()=>{
        signInWithGoogle(location,history);
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleLogin} >
                        <Typography sx={{ mt: 15, color: "#26c6da" }} variant="h5" gutterBottom component="div">
                            Login
                        </Typography>
                        <TextField
                            onChange={textFieldHandler}
                            sx={{ width: "75%", m: 3 }}
                            id="standard-basic"
                            label="You Email"
                            name="email"
                            variant="standard" />
                        <TextField
                            onChange={textFieldHandler}
                            sx={{ width: "75%", m: 1 }}
                            id="standard-password-input"
                            label="Your Password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            variant="standard"
                        /> <br />
                        <Button type="submit" sx={{ backgroundColor: '#26c6da', my: 2 }} variant="contained">SUBMIT</Button>
                        <br />
                        <span>New User ?</span>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button>PLEASE REGISTER</Button>
                        </NavLink>
                    </form>


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

                    <Button onClick={handleGoogleSignIn} type="submit" sx={{ my: 2 }} variant="contained">Sign In With Google</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} alt="" style={{ width: '78%' }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;