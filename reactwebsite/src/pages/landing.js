
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Header from '../components/Header.js';
import PlaceToVisit from '../components/PlaceToVisit';
import LoginButton from '../components/LoginButton';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/ucr2.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
  },
}));
export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
   
   <CssBaseline />
      <Header />
      <PlaceToVisit />
      <center> <LoginButton /></center>
    </div>
  );
}

