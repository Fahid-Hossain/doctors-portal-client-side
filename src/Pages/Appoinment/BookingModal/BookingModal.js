import React, { useState } from 'react';
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

const BookingModal = ({ openBooking, handleBookingClose, booking, date,setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    // useState for text field 
    //---initial state if not change then will apply this
    const initalInfo = {
        patientName: user.displayName,
        email:user.email,
        phone:user.phone
    }
    const [bookingInfo, setBookingInfo] = useState(initalInfo)
    //handle onBlur
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);

    }



    //handle booking submit 
    const handleBookingSubmit = (e) => {
        e.preventDefault();
        // alert("submitting");
        //collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName:name,
            date: date.toLocaleDateString()
        }
        //send to the database
        console.log(appointment);
        fetch("https://dry-reef-29670.herokuapp.com/appointments",{
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(appointment)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                //setBookingSuccess in availavail page component
                setBookingSuccess(true);
                //closing submit form after submit
                handleBookingClose();
                
            }
        })
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
                            sx={{ width: "89%", m: 1 }}
                            // label="Size"
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "89%", m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "89%", m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "89%", m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            // defaultValue="Your Phone no"
                            placeholder="Your Phone no"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: "89%", m: 1 }}
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