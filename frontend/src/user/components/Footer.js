import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { DiReact } from "react-icons/di";


const useStyles = makeStyles((theme) => ({
    containerStyle: {
        marginTop: "5em",
        marginBottom: "2.5em",
    },
    breadCrumbStyle: {
        ...theme.typography.search,
    },
    
    //React Symbol
    reactSymbol: {
        marginTop: "1em",
        marginLeft: "1em",
        marginRight: "1em",
        color: "white",
    }
}));

export default function Footer(props) {
    const classes = useStyles();

    return (
       <Grid direction="column" container justify="center" alignItems="center" className={classes.containerStyle}>
           <Grid item>
            <Breadcrumbs className={classes.breadCrumbStyle}>
                <div>Home</div>
                <div>About</div>
                <div>Login/Register</div>
            </Breadcrumbs>
           </Grid>
           {/* <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                    <DiReact className={classes.reactSymbol}/>
                </Grid>
                <Grid item>
                    <div>Powered by React</div>
                </Grid>
           </Grid> */}
       </Grid>
    )
}