import { LOAD_VOUCHERS } from './constants';

export function loadVouchers(vouchers) {
    return {
        type: LOAD_VOUCHERS,
        vouchers
    }
};