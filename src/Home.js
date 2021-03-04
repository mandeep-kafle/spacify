import React, { useEffect, useState } from 'react'
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {useHistory } from 'react-router-dom';

import axios from "axios";

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';


const API_KEY="3rO5KkBP2uv3JGN84lpafIxu8efaJXikm5X5bPr2";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function Home() {
  const [reterived,setReterived ] = useState([]);
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(res=>{
        console.log(res);
        setReterived(res.data);
        console.log(reterived);
      
    })
    .catch(err=>{
        console.log(err)
    })
    
   
    
},[])

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openlm, setOpenlm] = React.useState(false);

  const handleClickOpenlm = () => {
      setOpenlm(true);
    };
  
    const handleCloselm = () => {
      setOpenlm(false);
    };

  return (
    <div ClassName="home">
      <Dialog
        open={openlm}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloselm}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"About this Image"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {reterived.explanation}
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
   
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Share"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {reterived.hdurl}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        < FileCopyIcon fontSize="large"/>
        <FacebookIcon fontSize="large"/>
        <InstagramIcon fontSize="large"/>
            <TwitterIcon fontSize="large"/>
            <LinkedInIcon fontSize="large"/>
            
     
          
          
        </DialogActions>
       
      </Dialog>
    <div className="home__wrapper" style={{backgroundImage: `url('${reterived.hdurl}')` ,
    width: 1920,
    height: 900,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>


      
        
        <AppBar style={{ backgroundColor: 'transparent' }} position="sticky">
            <Toolbar className={classes.toolbar}>
              <StyledButton size="large" onClick={() => history.push('/')}>Home</StyledButton>
              <StyledButton size="large" onClick={() => history.push('./Mars')}>Photo Gallery</StyledButton>

                
            </Toolbar>
        </AppBar>

        

        </div>

        <Card className={classes.Card}>
                    <CardActionArea>
                        <CardContent className={classes.CardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                 {reterived.title} 
                                <Typography gutterBottom variant="h6" component="h5">
                                     Image source: NASA , Date: {reterived.date} 
                                </Typography>
                        </Typography>
                            <Typography variant="body2" color="white" component="p">
                                 {(String(reterived.explanation).length)>580?String(reterived.explanation).substr(0,570)+("   ...Learn More"):reterived.explanation} 
   
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.actions}>
        <Button size="large" color="primary"  onClick={handleClickOpen} >
  
          Share
        </Button>
        <Button size="large" color="primary" onClick={handleClickOpenlm} >
   
          Learn More
        </Button>
      </CardActions>

                  
      </Card>
        
        </div>
        
  );
}
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


const useStyles = makeStyles({
 
});
export default Home;