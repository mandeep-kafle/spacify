import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import NavBar from './NavBar';
import './Home.css';
const API_KEY="3rO5KkBP2uv3JGN84lpafIxu8efaJXikm5X5bPr2";
function Home() {

    const [reterived,setReterived ] = useState([]);
    const [imageUrl, setimageUrl] = useState('');
    const classes = useStyles();

   
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res=>{
            console.log(res);
            setReterived(res.data);
            console.log(reterived);
            setimageUrl(reterived.url);
        })
        .catch(err=>{
            console.log(err)
        })
        
       
        
    },[])
    return (
        <div className="home">
            <NavBar />

            <div className="home__body">

                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                        image={reterived.hdurl}
                            
                            title={reterived.title}
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {reterived.title}  
                                <Typography gutterBottom variant="h6" component="h5">
                                    Image source: NASA , Date: {reterived.date}
                                </Typography>
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {reterived.explanation} ...
   
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
        <Button size="large" color="primary">
          Share
        </Button>
        <Button size="large" color="primary">
          Learn More
        </Button>
      </CardActions>

                  
                </Card>
            </div>

        </div>
    )
}


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

export default Home
