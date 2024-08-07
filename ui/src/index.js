import React from 'react';
import ReactDOM from 'react-dom/client';
/*
This code is modified from a tutorial on React in GitHub Pages by Nelson Michael, published 2022-08-15, retrieved 2023-03-31 from logrocket.com
Tutorial found here:
https://blog.logrocket.com/deploying-react-apps-github-pages/
*/
import { HashRouter as Router } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';

import './index.css';
import App from './App';
import { appTheme } from './appTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <ThemeProvider theme={appTheme}>
        <App />
      </ThemeProvider>
    </Router>
);
