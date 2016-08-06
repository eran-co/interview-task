import React, { PropTypes } from 'react';

function VouchersListHeaderTitle(props) {
    return (
        <div className='header-title'>{props.title}</div>
    )
}

VouchersListHeaderTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default VouchersListHeaderTitle;
