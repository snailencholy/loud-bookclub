/****************************
/          Imports          / 
****************************/

//
// UI Library
//
import {
    Grid,
    AppBar,
    Toolbar,
    Container,
    Tabs,
    Tab
} from '@mui/material'

//
// Assets
//
import logo from '../../Assets/Logo.svg'

/*
/ The idea is to have a Header that will change based on which page it is on as well as
/ who is logged in
/ The backend should feed the correct values for Tabs, Whether or not there is a search bar,
/ which buttons should show, and if the header should be shown at all.
*/


/*******************************
/          Interfaces          / 
*******************************/
interface HeaderProps {
    tabs: string[]
    settings: boolean
    searchBar: boolean
}

//
// TESTING
//
const url = 'localhost:3000'


/********************************** 
/          Main Function          /
/  
**********************************/
const Header = (props: HeaderProps) => {
    return (
        <AppBar style={{backgroundColor:'#032340'}}>
            <Container>
                <Toolbar>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <img src={logo} alt='Loud-Bookclub-Logo' style={{width:'12.5vw', height:'12.5vh'}} />
                        </Grid>
                        <Grid item>
                            <Tabs>
                                {
                                    props.tabs.map(tab => {
                                        return (
                                            <Tab key={tab} label={tab} style={{fontFamily:'Berlin Sans FB', color:'#FFF'}}/>
                                        )
                                    })
                                }
                            </Tabs>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header