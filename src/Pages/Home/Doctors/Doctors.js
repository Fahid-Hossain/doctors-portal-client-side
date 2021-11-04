import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctorImg from "../../../images/doctor-small.png"
import { Typography } from '@mui/material';

const Doctors = () => {
    return (
        <Box sx={{ flexGrow: 1,mt:5 }}>
             <Typography variant="h5" component="h2" sx={{color:"#26c6da",fontWeight:"500",mb:10,borderBottom: 1,width:"200px",mx:"auto"}}>
               Our Doctors
            </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(3)).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <img src={doctorImg} alt="" style={{width:"100%"}} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};

export default Doctors;