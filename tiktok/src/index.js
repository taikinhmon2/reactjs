import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Provider from './usecontext/themecontext';
import { Provider as Provider1 } from 'react-redux';
import store from './RUDUX/store';
// import { StoreProvider } from './globalState';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider1 store={store}>
    <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
  </Provider1>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
