import React, { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';

const Appointments = () => {
    const {user}=useAuth();
    const [appointments,setAppointments] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/appointments?email=${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setAppointments(data);
        })
    },[])
    return (
        <div>
            <h3>Appointments total {appointments.length}</h3>
        </div>
    );
};

export default Appointments;