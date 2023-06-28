//
// import ReactDOM from 'react-dom';



// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
  
//   ,document.getElementById('root')
// );

/// VERSION ANTIGUA

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';
import App from './App';

// axios.defaults.baseURL = "http://localhost:3001"; // LOCAL SERVER 

axios.defaults.baseURL = "https://pi-foods-back-production-de11.up.railway.app/" // SERVER DEPLOYED

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


