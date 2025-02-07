import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {ThemeProvider} from 'styled-components';
import { DefaultTheme } from './components/theme/DefaultTheme';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Declarando tema na raiz para usar props com auto complete
declare module 'styled-components' {
  export interface DefaultTheme {}
}

const mainTheme = DefaultTheme;
let theme = {
  ...mainTheme,
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
// console.log(process.env) 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
