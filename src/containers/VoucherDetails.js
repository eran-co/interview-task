import React from 'react';
import '../styles/vouchersList.css';
import { connect } from 'react-redux';
import {updateVoucherProperty } from '../actions';

class VoucherDetailsComponent extends React.Component {
    render() {
        return (
            <h1>details</h1>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const voucher = state.vouchers.find(voucher => voucher.id === ownProps.params.voucherId);
    return {
        ...voucher
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateVoucherProperty: (voucherId, key, value) => {
            dispatch(updateVoucherProperty(voucherId, key, value));
        }
    }
};

const VoucherDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(VoucherDetailsComponent);

export default VoucherDetails;
