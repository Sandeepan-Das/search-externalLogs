import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';

import searchText from '../../images/Search-logs-text.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    
    return(
        <AppBar className={classes.appBar} position='static' color='inherit'>
                <img src={searchText} alt="icon" height="42px"/>
                <Button variant="contained" color="primary">Sign In</Button>        
        </AppBar>
    );
};

export default Navbar
