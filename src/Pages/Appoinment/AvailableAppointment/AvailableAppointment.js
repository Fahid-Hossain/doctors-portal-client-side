import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h3>Appointment available On {date.toDateString()}</h3>
        </div>
    );
};

export default AvailableAppointment;