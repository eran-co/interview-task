import { LOAD_VOUCHERS } from './constants';


export function vouchersReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_VOUCHERS:
            return Object.assign({}, state, {vouchers: action.vouchers});
        default:
            return state;
    }
}

