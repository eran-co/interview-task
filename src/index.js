import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { fetchVouchers } from './utils/api';
import { vouchersReducer } from './reducers';
import { loadVouchers } from './actions';
import { createStore } from 'redux'

let store = createStore(vouchersReducer);

fetchVouchers().then(data => {
    store.dispatch(loadVouchers(data.vouchers));
    console.log(store.getState())
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
