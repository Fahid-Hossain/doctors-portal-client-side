import React from 'react';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:"400px"
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter,textAlign: 'left'}} item xs={12} md={6}>
                    <Box>
                    <Typography variant="h3">
                        Your New Smile <br/>
                        Starts Here
                    </Typography>
                    <Typography variant="h6" sx={{my:3,fontSize:"13",color: "gray",fontWeight:"300"}} >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, pariatur atque itaque ipsa ex dolorem in commodi vero veniam possimus.
                    </Typography>
                    <Button variant="contained" style={{backgroundColor:'#26c6da'}}>Get Appointment</Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width:"400px"}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;