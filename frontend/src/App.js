import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';
import { BrowswerRouter, Route, Redirect, Switch } from 'react-router-dom';


//My Components
import Header from './user/components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider>
  );
}

export default App;
