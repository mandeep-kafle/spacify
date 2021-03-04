import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

import background from "./mars.png";

import  { useState} from "react";

import AppsIcon from '@material-ui/icons/Apps';


import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";




// {"id":102693,"sol":1000,"camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","earth_date":"2015-05-30","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}}


const images = [
  
    'https://apod.nasa.gov/apod/image/2101/M66_Hubble_LeoShatz_Crop1024.jpg',
    'https://apod.nasa.gov/apod/image/2101/ngc2841_hstColombari_2896.jpg',
    'https://apod.nasa.gov/apod/image/2102/Pelican_PetraskoEtAl_3555.jpg',
    'https://apod.nasa.gov/apod/image/2102/a14pan9335-43emj.jpg',
    'https://apod.nasa.gov/apod/image/2102/AS14-71-9845v2wmktwtr4Jerry.jpg',
    'https://apod.nasa.gov/apod/image/2102/MeteorStreak_Kuszaj_1080.jpg',
    'https://apod.nasa.gov/apod/image/2101/Chandrafirstlight_0_1024.jpg',
    'https://apod.nasa.gov/apod/image/2101/Pluto-Mountains-Plains9-17-15.jpg',
    'https://apod.nasa.gov/apod/image/2103/2021_03_02_Mars_Taurus_1800px.jpg',
    'https://apod.nasa.gov/apod/image/2102/rosette_BlockPuckett_2918.jpg',
    'https://apod.nasa.gov/apod/image/2101/Medulla_Croman_1200.jpg',
    'https://apod.nasa.gov/apod/image/2102/MeteorStreak_Kuszaj_5341.jpg',
    'https://apod.nasa.gov/apod/image/2101/Chandrafirstlight_0.jpg',
    'https://apod.nasa.gov/apod/image/2101/CenAjets_EsoNasa_1280.jpg',
  ];
  console.log(images)
function Mars() {
  const history = useHistory();
    const classes = useStyles();



    const [photoIndex, setphotoIndex] = useState(0);

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handlePrev=()=>{
        setphotoIndex((photoIndex+images.length-1)%images.length);
    };
    const handleNext=()=>{
        setphotoIndex((photoIndex+1)%images.length);
    };
    console.log(photoIndex);
    const text="Image source: NASA's APOD ARCHIVE";
    const text1="View the full archive : https://apod.nasa.gov/apod/archivepix.html "
    return (
       

        <div className={classes.mars}>


        
 
        {open && (
          <Lightbox
            mainSrc={images[photoIndex]}
            imageTitle={text}
            imageCaption={text1}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={handleClose}
            onMovePrevRequest={handlePrev}
            onMoveNextRequest={handleNext}
          />
        )}
          <AppBar className={classes.root} style={{background:"transparent"}}>
            <Toolbar>
                <AppsIcon className={classes.appicon} onClick={handleClickOpen} />
                <HomeIcon className={classes.icon} onClick={()=>history.push('/')}/>
                
            </Toolbar>
        </AppBar>
            

            
      

    </div>
    

            
      
    );
}

const useStyles= makeStyles({
    mars:{
         backgroundImage:`url(${background})`,
        height:1080,
        width:1920,
        position:"sticky"
    },
   
    appicon:{
        color:"red",
        fontSize: 100,
    
        
    },
    icon:{
      color:"red",
        fontSize: 100,
        padding:10,
    },
    root: {
        
        marginTop:800
      }
});
export default Mars
