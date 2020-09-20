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


import logo from "../../Assets/no-background.png"

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
        marginLeft: "10em",
    },

    //Tabs
    tabContainer: {
        marginLeft: "auto",
    },

    tab: {
        ...theme.typography.tab,
        minWidth: 20,
        marginLeft: "25px",
        marginRight: "50px",
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
                    label="Home"
                />
                <Tab
                    label="About Us"
                />
                <Tab
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
                                className={classes.searchBar}
                                id="search"
                                placeholder="Search for a Book"
                            />
                       </form>
                       {tabs}
                   </Toolbar>
               </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}