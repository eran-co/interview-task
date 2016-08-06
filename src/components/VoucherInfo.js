import React, { PropTypes } from 'react';
import LabelWithCopy from './LabelWithCopy';

function VoucherInfo({ brandName, brandImageUrl, serialNumber, cvv }) {
    return (
        <div className='voucher-info'>
            <img className='brand-image' src={brandImageUrl} alt={brandName}/>
            <div className='voucher-info-details'>
                <div>{brandName}</div>
                <LabelWithCopy label="S/N:" value={serialNumber} />
                <LabelWithCopy label="CVV:" value={cvv} />
            </div>
        </div>
    )
}

VoucherInfo.propTypes = {
    brandName: PropTypes.string.isRequired,
    brandImageUrl: PropTypes.string,
    serialNumber: PropTypes.number,
    cvv: PropTypes.number
};

export default VoucherInfo;
