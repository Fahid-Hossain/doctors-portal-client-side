import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hook/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking ,date }) => {
    const { name, time } = booking;
    const {user}= useAuth();
    const handleBookingSubmit = (e)=>{
        e.preventDefault();
        alert("submitting");
        //collect data

        //send to the database

        //closing submit form after submit
        handleBookingClose();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            sx={{width:"89%",m: 1}}
                            // label="Size"
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{width:"89%",m: 1}}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{width:"89%",m: 1}}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{width:"89%",m: 1}}
                            id="outlined-size-small"
                            // defaultValue="Your Phone no"
                            placeholder="Your Phone no"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{width:"89%",m: 1}}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button> 
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;