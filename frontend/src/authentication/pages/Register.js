import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


import simpleLogo from '../../Assets/tab-icon_1.svg'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginRight: "35em",
        marginLeft: "35em",
        marginTop: "5em",
        marginBottom: "5em",
        width: "50em",
        height: "50em",
        background: theme.palette.common.lightGrey,
    },

    logoContainer: {
        background: theme.palette.common.bright,
    },

    titleBlock: {
        margin: "2em",
        background: theme.palette.common.textBlock,
    },

    gridItems: {
        marginTop: "5em",
        width: "50em",
    },


}))


function Register() {

    const classes = useStyles();


    
    return(
        <Grid container direction="column" alignContent="center" alignItems="center" className={classes.mainContainer}>
            <Grid container className={classes.logoContainer}>
                <Grid item>
                    <Button component={Link} to="/">
                        <img src={simpleLogo} height="80" width="80" alt="Simple Logo"/>
                    </Button>
                </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center" alignContent="center" >
                <Grid item className={classes.titleBlock}>
                    <Typography variant="h3" fontFamily="raleway">Register for Loud Bookclub today</Typography>
                </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center" alignContent="center">
                <form>
                    <Grid item className={classes.gridItems}>
                        <FormControl fullWidth>
                            <Input
                                id="email"
                                defaultValue="Please enter your email"
                                variant="filled" 
                            />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItems}>
                        <FormControl fullWidth>
                            <Input
                                id="username"
                                defaultValue="Please enter a username"
                                variant="filled" 
                            />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItems}>
                        <FormControl fullWidth>
                            <Input
                                id="password"
                                defaultValue="Please enter a password"
                                variant="filled" 
                            />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItems}>
                        <FormControl fullWidth>
                            <Input
                                id="passwordConf"
                                defaultValue="Please confirm your password"
                                variant="filled" 
                            />
                        </FormControl>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default Register;