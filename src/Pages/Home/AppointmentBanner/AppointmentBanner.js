import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from "../../../images/doctor.png"
import bg from "../../../images/appointment-bg.png"

const AppointmentBanner = () => {
    const appointmentBannerBg = {
        background:`url(${bg})`,
        marginTop: "160px",
        backgroundColor: "rgba(45, 58, 74,0.7)",
        backgroundBlendMode: "darken, luminosity",
    
    }
    return (
        <Box style={appointmentBannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={7}>
                    <img src={doctor} style={{ width: "75%",marginTop:"-110px"}} alt="" />
                </Grid>
                <Grid item xs={12} md={5} align="left" sx={{display: "flex",justifyContent: 'center',textAlign: 'left',alignItems: 'center'}}>
                    <Box>
                    <Typography variant="h5" component="h2" style={{color:"#2196f3"}}>
                        Apppoinment
                    </Typography>
                    <Typography sx={{ mb: 1 }} variant="h4" component="h1" style={{color: 'white',fontWeight: 'bold'}}>
                       Make An Apppoinment Today
                    </Typography>
                    <Typography variant="p" component="p" style={{color:"#e1bee7"}}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, modi.
                    </Typography>
                    <Button sx={{ mt: 2  }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner; <h3>This is AppointmentBanner</h3>