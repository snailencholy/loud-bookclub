import React from 'react';
import { makeStyles, withTheme, mergeClasses } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles';

import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';


const useStyles = makeStyles((theme) => ({
   
})); 



export default function Home(){

    const classes = useStyles();
    const theme = useTheme();

    return(
        <React.Fragment>
            <Header/>
            <Card />
            <Footer />
        </React.Fragment>
        
    );
}