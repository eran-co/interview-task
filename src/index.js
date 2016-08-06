import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { fetchVouchers } from './utils/api';
import { vouchersReducer } from './reducers';
import { loadVouchers } from './actions';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import VouchersList from "./containers/VouchersList"

let store = createStore(vouchersReducer);

fetchVouchers().then(data => {
    store.dispatch(loadVouchers(data.vouchers));
});

ReactDOM.render(
    <Provider store={store}>
        <VouchersList />
    </Provider>,
  document.getElementById('root')
);
