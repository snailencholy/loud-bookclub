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
      <div style={{backgroundColor: "#333333"}}></div>
    </ThemeProvider>
  );
}

export default App;
