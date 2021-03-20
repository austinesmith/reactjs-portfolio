import React, { Fragment } from 'react';
import logo from './logo.svg';
import '../App.css';

import Button from '@material-ui/core/Button';
import { Header, Footer } from './layouts';
import Portfolio from './pages/Portfolio';
import Exercises from './exercises';
import ThemeProvider from './darkmode';
import { createMuiTheme } from '@material-ui/core/styles'
import 'fontsource-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  // const theme = createMuiTheme({
  //   palette: {
  //     type: 'light'
  //   },
  //   //holder
  //   typography: {
  //     h2: {
  //       fontSize: 36
  //     }
  //   }
  // });
  const theme = createMuiTheme({
    palette: {
      type: 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />


      <Header />

      <Portfolio />

      <Footer />


    </ThemeProvider>
  );
}

export default App;
