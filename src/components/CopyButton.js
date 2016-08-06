import React, { PropTypes } from 'react';
import copyImage from '../media/copy.svg';


function CopyButton({ onClick }) {
    return (
        <img className='copy-image' src={copyImage} title="copy to clipboard" alt="" onClick={onClick}/>
    )
}

CopyButton.propTypes = {
    onClick: PropTypes.func
};

export default CopyButton;
