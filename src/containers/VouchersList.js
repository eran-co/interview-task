import React from 'react';
import '../styles/vouchersList.css';
import VouchersListHeader from '../components/VouchersListHeader';
import VouchersListRow from '../components/VouchersListRow';
import { connect } from 'react-redux';
import { expandVoucher, updateVoucherProperty } from '../actions';

class VouchersListComponent extends React.Component {
    render() {
        return (
        <div className='vouchers-list-wrapper'>
            <VouchersListHeader />
            {this.props.vouchers.map(voucher =>
                <VouchersListRow
                    key={voucher.id}
                    id={voucher.id}
                    brandName={voucher.brandName}
                    faceValue={voucher.faceValue}
                    brandImageUrl={voucher.brandImageUrl}
                    askingPrice={voucher.askingPrice}
                    discount={voucher.discount}
                    currency={voucher.currency}
                    seller={voucher.seller}
                    isExpanded={voucher.isExpanded}
                    serialNumber={voucher.serialNumber}
                    cvv={voucher.cvv}
                    notes={voucher.notes}
                    created={voucher.created}
                    expandVoucher={this.props.expandVoucher}
                    updateVoucherProperty={this.props.updateVoucherProperty}
                />
            )}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        vouchers: state.vouchers.map(voucher => Object.assign({}, voucher, {isExpanded: voucher.id === state.expandedVoucherId}))
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        expandVoucher: (voucherId) => {
            dispatch(expandVoucher(voucherId))
        },
        updateVoucherProperty: (voucherId, key, value) => {
            dispatch(updateVoucherProperty(voucherId, key, value));
        }
    }
};

const VouchersList = connect(
    mapStateToProps,
    mapDispatchToProps
)(VouchersListComponent);

export default VouchersList;
