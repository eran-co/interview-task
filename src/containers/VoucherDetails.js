import React from 'react';
import '../styles/voucherDetails.css';
import { connect } from 'react-redux';
import {updateVoucherProperty } from '../actions';
import VoucherDetailsForm from '../components/VoucherDetailsForm';
import StatusButtons from '../components/StatusButtons';


class VoucherDetailsComponent extends React.Component {
    render() {
        return (
            <div className="voucher-details-container">
            {this.props.id ?
                <VoucherDetailsForm
                    id={this.props.id}
                    brandName={this.props.brandName}
                    serialNumber={this.props.serialNumber}
                    cvv={this.props.cvv}
                    seller={this.props.seller}
                    owner={this.props.owner}
                    isPaperVoucher={this.props.isPaperVoucher}
                    bulkId={this.props.bulkId}
                    invoiceNumber={this.props.invoiceNumber}
                    orderNumber={this.props.orderNumber}
                    status={this.props.status}
                    updateVoucherProperty={this.props.updateVoucherProperty}
                />
                : false }
                <StatusButtons id={this.props.id} updateVoucherProperty={this.props.updateVoucherProperty} />

            </div>
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
