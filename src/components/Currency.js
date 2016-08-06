import React, { PropTypes } from 'react';

function getCurrencySign(currency) {
    let currencySign = '£';
    if (currency === 'USD') {
        currencySign = '$';
    }
    if (currency === 'EUR') {
        currencySign = '€';
    }
    
    return currencySign;
}

function Currency({amount, currency, discount}) {
    const currencySign = getCurrencySign(currency);

    return <div className="currency cell-value">{amount} {currencySign} {discount ? <div className="discount">({discount}%)</div> : false} </div>;
}

Currency.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string,
    discount: PropTypes.number
};

export default Currency;


