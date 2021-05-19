import { Container, Typography } from '@material-ui/core';
import React,{useEffect} from 'react';
import { authenticateWithGoogle } from '../../auth/firebase.auth';
import Hero from '../../components/landing/Hero';
import NavBar from '../../components/landing/Navbar';
import { useStateValue } from '../../context/usercontext/AuthProvider';

const LandingPage=()=>{
    const [,dispatch]=useStateValue()

    return(
        <Container>
            <NavBar/>
            <Hero/>
            <Typography align="center">Made with ❤ by FuzzySid</Typography>
        </Container>
    )
}

export default LandingPage;