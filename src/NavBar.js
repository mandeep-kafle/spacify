import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './NavBar.css';
import { red } from '@material-ui/core/colors';

function NavBar() {
    const history = useHistory();
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },

        title: {
            flexGrow: 1,
        },

    }));
    const classes = useStyles();

    return (

        <AppBar style={{ background: '#2E3B55' }} position="sticky">
            <Toolbar>

                <Button style={{ background: 'red' }} color="inherit" onClick={() => history.push('/')}>Home</Button>
                <Button className="b1" onClick={() => history.push('/Mars')}>View Mars</Button>
                <Button onClick={() => history.push('/Coolstuff')}>Cool Stuff</Button>
                <Typography variant="h6" className={classes.title}>

                </Typography>
                <Button color="inherit">Login</Button>
                <Button onClick={() => history.push('/AboutDev')}>AboutDev</Button>
            </Toolbar>
        </AppBar>



    )
}

export default NavBar

const useStyles = makeStyles({
    root: {
        maxWidth: 1920,
    },
    media: {
        height: 800,
    },
    content: {
        background: "#FAFAFA",
        maxHeight:100,
    }
});

/* <Link to="/">Home</Link>
           <p><Link to="/Mars">Mars</Link></p>
           <p><Link to="/Coolstuff">Coolstuff</Link></p>
           <p><Lin
            {/* <div className="navwrraper__left">
                <Button onClick={() => history.push('/')}>Home</Button>
                <Button onClick={() => history.push('/Mars')}>View Mars</Button>
                <Button onClick={() => history.push('/Coolstuff')}>Cool Stuff</Button>
            </div>
            <div className="navwrraper__right">
                <Button onClick={() => history.push('/AboutDev')}>AboutDev</Button>
            </div> */