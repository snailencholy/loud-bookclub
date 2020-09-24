import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withTheme, mergeClasses } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    cardStyleTop: {
        marginTop: "10em"
    },

    cardStyle: {
        marginTop: "5em",
    },
})); 

export default function Card(props) {
    const classes = useStyles();
    const theme = useTheme();

    return(
         <React.Fragment>
             <Paper className={classes.cardStyleTop} elevation={3}>
                <Grid>
                    <Grid item>
                        <div>Farts</div>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.cardStyle} elevation={3}>
                <Grid>
                    <Grid item>
                        <div>Farts</div>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.cardStyle} elevation={3}>
                <Grid>
                    <Grid item>
                        <div>Farts</div>
                    </Grid>
                </Grid>
            </Paper>

         </React.Fragment>
    );
}



