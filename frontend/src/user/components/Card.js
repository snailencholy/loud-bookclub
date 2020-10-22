import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, withTheme, mergeClasses } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

//TODO: This needs a major refactor to make it much more reusable.
//      Should probably be broken down into multiple components.
//      Number of cards and text, icons, etc... should be props.
//      This should have one template that is rendered based on
//      outside logic.


const useStyles = makeStyles((theme) => ({
    cardStyleTop: {
        marginTop: "10.5em",
        padding: "1em",
        backgroundColor: theme.palette.common.lightGrey,
    },

    cardStyle: {
        marginTop: "2em",
        padding: "1em",
        backgroundColor: theme.palette.common.lightGrey,
    },

    //Inside of the cards
    gridContainer: {
        marginTop: "5em",
        marginBottom: "5em",
    },

    cardText: {
        ...theme.typography.cards,
        
    }    

})); 

export default function Card(props) {
    const classes = useStyles();
    const theme = useTheme();

    return(
         <React.Fragment>
             <Paper className={classes.cardStyleTop} elevation={3}>
                <Grid container direction="row" alignItems="center" justify="center" className={classes.gridContainer}>
                    <Grid item>
                        <IconButton>
                            <IoIosArrowBack/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <div className={classes.cardText}>Top genres this month</div>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <IoIosArrowForward/>
                        </IconButton> 
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.cardStyle} elevation={3}>
                <Grid container direction="row" alignItems="center" justify="center" className={classes.gridContainer}>
                    <Grid item>
                        <IconButton>
                            <IoIosArrowBack/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <div className={classes.cardText}>This week's top books</div>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <IoIosArrowForward/>
                        </IconButton> 
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.cardStyle} elevation={3}>
                <Grid container direction="row" alignItems="center" justify="center" className={classes.gridContainer}>
                    <Grid item>
                        <IconButton>
                            <IoIosArrowBack/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <div className={classes.cardText}>This week's top audiobooks</div>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <IoIosArrowForward/>
                        </IconButton> 
                    </Grid>
                </Grid>
            </Paper>

         </React.Fragment>
    );
}



