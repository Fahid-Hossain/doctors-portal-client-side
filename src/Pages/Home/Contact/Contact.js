import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react';
import bg from "../../../images/appointment-bg.png"
import Typography from '@mui/material/Typography';

const Contact = () => {
    const backgroundImg = {
        background: `url(${bg})`,
        marginTop: "160px",
        backgroundColor: "rgba(45, 58, 74,0.9)",
        backgroundBlendMode: "darken",
    }
    return (
        <div style={backgroundImg} >
            <h1 style={{ color: "#26c6da", paddingTop: "35px" }}>Contact Us</h1>
            <Typography variant="h3" component="h2" sx={{color:"white",fontWeight:"500"}}>
               Always Connect With Us
            </Typography>
            <Box
                sx={{
                    width: "50%",
                    maxWidth: '100%',
                    margin: '0 auto',
                    color: "white"
                }}
            >
                <TextField sx={{ my: 2, backgroundColor: "white" }} fullWidth label="Email Adress" id="fullWidth" />
                <TextField sx={{ my: 2, backgroundColor: "white" }} fullWidth label="Subject" id="fullWidth" />
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Your Message..."
                    style={{ width: "100%", height: 130 }}
                />
                <Button sx={{ backgroundColor: '#26c6da', my: 2 }} variant="contained">SUBMIT</Button>

            </Box>
        </div>
    );
};

export default Contact;