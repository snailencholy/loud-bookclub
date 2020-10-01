import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


//My Components
import Header from './user/components/Header';
import Home from './user/pages/Home';
import Register from './authentication/pages/Register';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />}/>
          <Route exact path="/register" component={(props) => <Register {...props} />} />
        </Switch>
      </BrowserRouter>
      
    </ThemeProvider>
  );
}

export default App;
