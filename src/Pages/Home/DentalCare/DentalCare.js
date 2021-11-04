import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DentalCareImg from "../../../images/treatment.png"

const DentalCare = () => {
    return (
        <div>

            <Box sx={{ flexGrow: 1, my: 12 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid xs={12} md={6} style={{ textAlign: "center" }}>
                            <img src={DentalCareImg} alt="" style={{ width: "70%" }} />
                        </Grid>
                        <Grid xs={12} md={6} style={{ textAlign: "start" }}>
                            <Typography variant="h3" component="div" gutterBottom>
                                Exceptional Dental Care On Your Terms
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ color: 'text.secondary' }} >
                                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iste ut officiis magnam ad voluptates sequi dicta doloribus possimus veritatis?
                            </Typography>
                            <Button sx={{backgroundColor:'#26c6da'}} variant="contained">Learn More</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default DentalCare;