/****************************
/          Imports          / 
****************************/

//
// Page Routing
//
import {
    BrowserRouter as Router,
    Routes, //Switch was replaced by Routes
    Route,
    Link,
} from 'react-router-dom'

//
// UI Library
//
import {
    AppBar,
    Toolbar,
    Grid,
    Tabs,
    Tab,
    IconButton,
    Button,

} from '@mui/material'

// 
// Pages
//
import Landing from './Components/Pages/Landing'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'

//
// Custom Fonts
//
import './fonts.css'


/********************************** 
/          Main Function          /
/  This specifically is where all /
/  of the routing will live       /
**********************************/ 
const App = () => {
    return (
        <Router>
            <Routes>
                {/* Home/Landing Page */}
                <Route path='/' element={<Landing/>} />
                    
                {/* Login Page */}    
                <Route path='/LOGIN' element={<Login />}/>

                {/* Registration Page */}
                <Route path='/REGISTER' element={<Register />}/>

                {/* User Page */}
                <Route path='/user/uid' />
            </Routes>
        </Router>
    );
}

export default App;
