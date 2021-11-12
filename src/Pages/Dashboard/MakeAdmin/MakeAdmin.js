import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]= useState("");
    //form submit
    const handleAdminSubmit = e =>{
        e.preventDefault();
        const user = {email};
        fetch("http://localhost:5000/users/admin",{
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
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
                label="Email"
                variant="standard"
                type="email"
                onBlur={handleOnBlur}
                >

                </TextField>
                <Button type="submit" variant="contained" sx={{margin:"20px"}}>Dashboard</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;