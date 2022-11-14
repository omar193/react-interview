import React from 'react';
import './App.css';
import { Layout } from './components/header/layout/Layout'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red } from '@mui/material/colors';
import Movies from './components/containers/movies/Movies';

const theme = createTheme({
  palette: {
    secondary: {
      main: red[500]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <Movies />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
