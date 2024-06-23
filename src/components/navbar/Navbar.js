import React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {styled} from "@mui/material/styles";

const StyledLink = styled(Link) ({
        textDecoration : "none",
        boxShadow : "none",
        color : "green"
});

function Navbar() {
    return (
        <div>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <StyledLink to="/register">Register</StyledLink>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <StyledLink to="/room">Rooms</StyledLink>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <StyledLink to="/reservation">Reservation</StyledLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;