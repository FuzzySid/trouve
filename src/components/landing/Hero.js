import React from 'react';
import { landingStyles } from './styles';
import HeroImage from '../../hero.png';
import { Button, Typography } from '@material-ui/core';

const GoogleIcon=()=><img src="https://img.icons8.com/fluent/48/000000/google-logo.png" style={{height:20,width:20}}/>

const Hero=()=>{
    return(
        <div style={{...landingStyles.flexRow,...landingStyles.container}}>
            <div style={{...landingStyles.flexColumn,flex:'0.4',padding:'20px'}}>
                <Typography variant="h3" style={landingStyles.bold}>
                    Save Time, 
                </Typography>
                <Typography variant="h3" style={landingStyles.bold}>
                    Fuel productivity. 
                </Typography>
                <br/>
                <br/>
                <Typography>
                   Trouve brings you a simple tool to help manage your life. Organize all your lists at one place and collaborate with others to get things done on time.
                </Typography>
                <br/>
                <br/>
                <Button 
                    //startIcon={<GoogleIcon/>}
                    disableElevation 
                    variant="contained" 
                    style={landingStyles.getStartedBtn} 
                    fullWidth={false}
                >
                    Get Started
                </Button>
            </div>
            <div style={{flex:'0.6'}}>
                <img src={HeroImage} style={landingStyles.heroImage} />
            </div>
        </div>
    )
}

export default Hero;