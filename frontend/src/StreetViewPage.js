import React from 'react';
import ReactStreetview from 'react-streetview';
import getGoogleMapsAPIKey from './ApiKeys'
import {AppBar, IconButton, Toolbar} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import {ArrowBack} from "@mui/icons-material";

function DescriptionBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton href={'.'} edge="start" color="inherit" aria-label="home">
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    NLPRealEstate
                </Typography>
                <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                    Placeholder text
                </Typography>
                <IconButton edge="end" color="inherit" aria-label="back">
                    <ArrowBack />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default function StreetViewPage() {
    const googleMapsApiKey = getGoogleMapsAPIKey()
    // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
    const streetViewPanoramaOptions = {
        position: {lat: 47.6168, lng: -122.045},
        pov: {heading: 100, pitch: 0},
        zoom: 1
    };

    return (
        <div style={{
            width: '100%',
            height: '91.3vh',
            backgroundColor: '#eeeeee'
        }}>
            <DescriptionBar/>
            <ReactStreetview
                apiKey={googleMapsApiKey}
                streetViewPanoramaOptions={streetViewPanoramaOptions}
            />
        </div>
    );
}