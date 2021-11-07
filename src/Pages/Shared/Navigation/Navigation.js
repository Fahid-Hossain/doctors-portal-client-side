import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Navigation = () => {
  const {user,logOut}=useAuth();
    return (
        <Box sx={{ flexGrow: 2 }}>
        <AppBar position="relative">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <NavLink to="/home" style={{textDecoration:"none",color:"white"}}>
             <Button color="inherit">Home</Button>
             </NavLink> 
            <NavLink to="/appointment" style={{textDecoration:"none",color:"white"}}> <Button color="inherit">APPOINTMENT</Button></NavLink>
           {
             user?.email ? <Box>
               <NavLink to="/dashboard" style={{textDecoration:"none",color:"white"}}>
             <Button color="inherit">Dashboard</Button>
             </NavLink> 
               <NavLink to="/login" style={{textDecoration:"none",color:"white"}}>
             <Button onClick={logOut} color="inherit">Logout</Button>
             </NavLink> 
             </Box>:  <Link to="/login" style={{textDecoration:"none",color:"white"}}>
             <Button color="inherit">Login</Button>
             </Link>
           }

          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;