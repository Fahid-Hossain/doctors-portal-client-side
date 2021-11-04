import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Services></Services>
           <DentalCare></DentalCare>
           <AppointmentBanner></AppointmentBanner>
           <Doctors></Doctors>
           <Contact></Contact>
        </div>
    );
};

export default Home;