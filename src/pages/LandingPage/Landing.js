import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Hero from '../../components/landing/Hero';
import NavBar from '../../components/landing/Navbar';

const LandingPage=()=>{
    return(
        <Container>
            <NavBar/>
            <Hero/>
            <Typography align="center">Made with ❤ by FuzzySid</Typography>
        </Container>
    )
}

export default LandingPage;