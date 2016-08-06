import { LOAD_VOUCHERS, EXPAND_VOUCHER, UPDATE_VOUCHER_PROPERTY } from './constants';

export function loadVouchers(vouchers) {
    return {
        type: LOAD_VOUCHERS,
        vouchers
    }
}

export function expandVoucher(voucherId) {
    return {
        type: EXPAND_VOUCHER,
        voucherId
    }
}

export function updateVoucherProperty(voucherId, key, value) {
    return {
        type: UPDATE_VOUCHER_PROPERTY,
        voucherId,
        key,
        value
    }
}