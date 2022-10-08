import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';//whole app is iven access to storage
import { store, persistor } from './redux/store';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#d23f57',
    },
    secondary: {
      main: '#f5e000',
    },
    error: {
      main: '#c62828',
    },
  },
};
const theme = createTheme(
  themeOptions
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
    <ThemeProvider theme={theme}>

     <App />
    </ThemeProvider>
    </PersistGate>
  </BrowserRouter>
  </Provider>
  ,
  rootElement
);
