import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { fetchVouchers } from './utils/api';
import { vouchersReducer } from './reducers';
import { loadVouchers } from './actions';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import VouchersList from "./containers/VouchersList";
import VoucherDetails from "./containers/VoucherDetails";

let store = createStore(vouchersReducer);

fetchVouchers().then(data => {
    store.dispatch(loadVouchers(data.vouchers));
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={VouchersList} />
            <Route path="/voucher/:voucherId" component={VoucherDetails}/>
        </Router>
    </Provider>,
  document.getElementById('root')
);
