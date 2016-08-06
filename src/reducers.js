import { LOAD_VOUCHERS, EXPAND_VOUCHER, UPDATE_VOUCHER_PROPERTY } from './constants';

const initialState = {
    vouchers: []
};

function updateVoucherProperty(state, voucherId, propertyKey, value) {
    const vouchers = state.vouchers;
    let voucherIndex = vouchers.findIndex(voucher => voucherId === voucher.id);
    let updatedProperty ={};
    updatedProperty[propertyKey] = value;

    let updatedVouchers = [
        ...vouchers.slice(0, voucherIndex),
        Object.assign({}, vouchers[voucherIndex], updatedProperty),
        ...vouchers.slice(voucherIndex + 1)
    ];

    return Object.assign({}, state, {vouchers: updatedVouchers});
}

export function vouchersReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_VOUCHERS:
            return Object.assign({}, state, {vouchers: action.vouchers});
        case EXPAND_VOUCHER:
            return Object.assign({}, state, {expandedVoucherId: action.voucherId});
        case UPDATE_VOUCHER_PROPERTY:
            return updateVoucherProperty(state, action.voucherId, action.key, action.value);
        default:
            return state;
    }
}

