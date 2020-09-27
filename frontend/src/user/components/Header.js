import React from 'react';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, withTheme, mergeClasses } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles';
import Input from "@material-ui/core/Input";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import logo from "../../Assets/svg-logo.svg"
import { TextField } from '@material-ui/core';

//Function to make the header look like it floats on top of the page when scrolled.
function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


//Styles
const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        ...theme.typography.tab,
    
        //make sure all content is displayed correctly underneath
        marginBottom: "4em",
        [theme.breakpoints.down("md")]: {
          marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
          marginBottom: "1.25em"
        },
      },

      logo: {
        ...theme.typography.tab,
        height: "8em",
        [theme.breakpoints.down("md")]: {
          height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
          height: "5.5em"
        },
      },
    
      logoContainer: {
        ...theme.typography.tab,
        padding: 0,
        margin: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
      },

    appBar: {
        zIndex: theme.zIndex.modal + 1,
    },

    //Search Bar
    searchBar: {
        ...theme.typography.search,
        //backgroundColor: theme.palette.common.navy,
        marginLeft: "15em",

        [theme.breakpoints.down("lg")]: {
            marginLeft: "10em",
        },

        [theme.breakpoints.down("md")]: {
            marginLeft: "5em",
        },
    },

    //Tabs
    tabContainer: {
        marginLeft: "auto",

        [theme.breakpoints.down("md")]: {
            marginLeft: ".25em",
            marginRight: "5em",
        }, 

        [theme.breakpoints.down("sm")]: {
            marginLeft: ".05em",
            marginRight: "5em",
        },
    },

    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "8em",
        marginRight: "10em",

        [theme.breakpoints.down("lg")]: {
            marginLeft: "7em",
            marginRight: "7em"
        },

        [theme.breakpoints.down("md")]: {
            minWidth: 1,
            //fontSize: "5rem",
            marginLeft: "2em",
            marginRight: "2em",
        },

        
        
    },

}));


export default function Header(props) {
    
    const classes = useStyles();
    const theme = useTheme();


    const tabs = (
        <React.Fragment>
            <Tabs
                className={classes.tabContainer}
            >
                <Tab
                    className={classes.tab}
                    label="Home"
                />
                <Tab
                    className={classes.tab}
                    label="About Us"
                />
                <Tab
                    className={classes.tab}
                    label="Login/Register"
                />
            </Tabs>             
        </React.Fragment>
    )

    return(
        <React.Fragment>
            <ElevationScroll>
               <AppBar className={classes.appBar} position="fixed" color="primary">
                   <Toolbar disableGutters>
                       <Button
                           disableRipple
                           className={classes.logoConatiner}
                       >
                           <img alt="company logo" className={classes.logo} src={logo} />
                       </Button>
                       <form>
                            <Input
                                variant="filled"
                                className={classes.searchBar}
                                id="search"
                                placeholder="Search for a book"
                            />
                       </form>
                       {tabs}
                   </Toolbar>
               </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}