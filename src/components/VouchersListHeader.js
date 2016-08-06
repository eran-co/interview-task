import React from 'react';
import VouchersListHeaderTitle from './VouchersListHeaderTitle';
import Spacer from './Spacer';


function VouchersListHeader() {
    return (
        <div className='header-wrapper'>
            <VouchersListHeaderTitle title='Info' />
            <Spacer width="310px" />
            <VouchersListHeaderTitle title='Face Value' />
            <Spacer width="63px" />
            <VouchersListHeaderTitle title='Asking Price' />
            <Spacer width="52px" />
            <VouchersListHeaderTitle title='Seller' />
        </div>
    )
}

export default VouchersListHeader;