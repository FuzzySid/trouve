import { Container } from '@material-ui/core';
import React from 'react';
import Hero from '../../components/landing/Hero';
import NavBar from '../../components/landing/Navbar';

const LandingPage=()=>{
    return(
        <Container>
            <NavBar/>
            <Hero/>
        </Container>
    )
}

export default LandingPage;