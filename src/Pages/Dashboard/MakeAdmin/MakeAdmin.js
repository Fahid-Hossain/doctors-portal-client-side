import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hook/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]= useState("");
    const [success,setSuccess]=useState(false);
    const {token} = useAuth();
    //form submit
    const handleAdminSubmit = e =>{
        e.preventDefault();
        const user = {email};
        fetch("http://localhost:5000/users/admin",{
            method: "PUT",
            headers: {
                "authorization":`Bearer ${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSuccess(true);
        })
    }
    // onBlur event
    const handleOnBlur = e=>{
        setEmail(e.target.value);
    }
    //
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                sx={{width:"30%"}}
                label="Email"
                variant="standard"
                type="email"
                onBlur={handleOnBlur}
                >

                </TextField>
                <Button type="submit" variant="contained" sx={{margin:"20px"}}>Dashboard</Button>
            </form>

           { success && <Alert severity="success">Admin added successfully Done!</Alert>}
        </div>
    );
};

export default MakeAdmin;