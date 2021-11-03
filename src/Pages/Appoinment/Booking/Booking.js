import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking,date }) => {
    const { name, time, space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 2,
                            width: 268,
                            height: 128


                        },
                    }}
                >

                    <Paper elevation={5} sx={{ py: 2 }}>
                        <Typography sx={{ color: 'info.main', fontWeight: "600" }} variant="h6" gutterBottom component="div">
                            {name}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            {time}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            {space} SPACES AVAILABLE
                        </Typography>
                        <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
                    </Paper>
                </Box>
            </Grid>
            <BookingModal
            booking={booking}
            handleBookingClose={handleBookingClose}
            openBooking = {openBooking}
            date={date}
            ></BookingModal>
        </>
    );
};

export default Booking;