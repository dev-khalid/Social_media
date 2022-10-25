import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
//getting my power back . 
//one more thing recaped . Redux 
//Recap done up until this point is : 
//Redux , Backend . 
//Still left ? Error handling & crud operation 