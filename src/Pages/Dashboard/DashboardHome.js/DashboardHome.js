import React from 'react';
import Appointments from '../Appointments/Appointments';
import Calendar from '../../Shared/Calendar/Calendar';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Appointments date={date}></Appointments>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default DashboardHome;