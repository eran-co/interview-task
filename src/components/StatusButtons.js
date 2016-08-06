import React, { PropTypes } from 'react';
import Button from './Button';

function approve(id, updateVoucherProperty, event) {
    event.stopPropagation();
    updateVoucherProperty(id, 'status', 'Active');
}

function decline(id, updateVoucherProperty, event) {
    event.stopPropagation();
    updateVoucherProperty(id, 'status', 'Decline');
}

function StatusButtons({ id, updateVoucherProperty }) {
    return (
        <div className="button-container">
            <Button color="blue" title="approve" onClick={approve.bind(this, id, updateVoucherProperty)}></Button>
            <Button color="red" title="decline" onClick={decline.bind(this, id, updateVoucherProperty)}></Button>
        </div>
    )
}

StatusButtons.prototypes = {
    id: PropTypes.string.isRequired,
    updateVoucherProperty: PropTypes.func.isRequired
};

export default StatusButtons;