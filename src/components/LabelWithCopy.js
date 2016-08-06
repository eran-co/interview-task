import React, { PropTypes } from 'react';
import CopyButton from './CopyButton';

function handleCopy(event) {
    event.stopPropagation();
    alert("Copy to clipboard wasn't implemented due to lack of time, but it possible to implement it (without flash) using the execCommand api");
}

function LabelWithCopy({ label, value }) {
    return <div><span className='label'>{label} </span>{value}<CopyButton onClick={handleCopy} /></div>;
}

LabelWithCopy.propTypes = {
    label: PropTypes.string,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ])
};

export default LabelWithCopy;