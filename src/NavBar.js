
import {  useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';




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

       


<AppBar style={{ backgroundColor: 'transparent' }} position="sticky">
<Toolbar className={classes.toolbar}>
  <StyledButton size="large" onClick={() => history.push('/')}>Home</StyledButton>
  <StyledButton size="large" onClick={() => history.push('./Mars')}>View Mars</StyledButton>

    
</Toolbar>
</AppBar>

    )
}

export default NavBar




const StyledButton = withStyles({
    root: {
      
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 0px 2px 0px black',
      '&:hover': {
        background: "black",
     },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

