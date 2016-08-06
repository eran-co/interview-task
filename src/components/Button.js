import React, { PropTypes } from 'react';
import '../styles/button.css';

var classNames = require('classnames');

function Button({ title, onClick, color = 'blue'}) {
    const buttonClass = classNames('button', color);
    return <button className={buttonClass} onClick={onClick}>{title}</button>;
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;

