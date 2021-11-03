import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from "../../../images/fluoride.png"
import cavity from "../../../images/cavity.png"
import whitening from "../../../images/whitening.png"
import Service from '../Service/Service';

const services = [
    {
        name: "Flouride Treatement",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum officia facere enim quibusdam! Quidem blanditiis ducimus velit sequi sint. ",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum officia facere enim quibusdam! Quidem blanditiis ducimus velit sequi sint. ",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum officia facere enim quibusdam! Quidem blanditiis ducimus velit sequi sint. ",
        img: whitening
    }
]

const Services = () => {
    return (
        <Container>
            <Typography variant="h5" component="div" sx={{ fontWeight: 500,color: 'success.main' ,m: 2 }}>
                OUR SERVICES
            </Typography>
            <Typography variant="h3" component="div" sx={{ fontWeight: 600,m:5 }}>
               Services we Provide
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.name}
                        ></Service>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;