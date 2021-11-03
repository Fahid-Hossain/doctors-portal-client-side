import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [

    {
        id: 1,
        name: "Teeth Orthodonics",
        time: "08.00 AM -09.00 PM",
        space: 6
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: "09.00 AM -10.00 AM",
        space: 5
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "10.00 AM -11.00 AM",
        space: 7
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "11.00 AM -12.00 PM",
        space: 5
    },
    {
        id: 5,
        name: "Pendiatric Dental",
        time: "06.00 AM -07.00 PM",
        space: 10
    },
    {
        id: 6,
        name: "Oral Surgery",
        time: "07.00 PM -08.00 PM",
        space: 8
    }

]

const AvailableAppointment = ({ date }) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main',fontWeight: "500",marginBottom: '50px',marginTop:"30px" }}>Appointment available On {date.toDateString()}</Typography>
            <Grid container spacing={2}>
              {
                  bookings.map(booking=><Booking
                     booking={booking}
                     date={date}
                     key={booking.id}
                     ></Booking>)
              }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;