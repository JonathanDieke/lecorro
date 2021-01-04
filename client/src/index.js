import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store , persistor} from "./Store/configStore"
import Axios from 'axios'
import App from './App';
import * as serviceWorker from './serviceWorker';


if(process.env.NODE_ENV === "development"){
  Axios.defaults.baseURL = "http://localhost:3000"
}
if(process.env.NODE_ENV === "production"){
  Axios.defaults.baseURL = "https://lecorro.herokuapp.com"
}


// Axios.defaults.headers.authorization  = "Access-Control-Allow-Origin"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
