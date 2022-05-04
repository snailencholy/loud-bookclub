import {
    Grid
} from '@mui/material'

// UI Components
import Header from '../UI/Header'

const headerTabs = ['ABOUT', 'FAQ', 'LOGIN', 'REGISTER']

const Landing = () => {
    return (
        <div>
            <Header tabs={headerTabs} settings={false} searchBar={false}/>
            <Grid></Grid>
        </div>
    )
}

export default Landing