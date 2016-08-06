import React, { PropTypes } from 'react';


function Spacer(props) {
    const style = {
        width: props.width
    };
    return (
        <span className="spacer" style={style}></span>
    )
}

Spacer.propTypes = {
    width: PropTypes.string.isRequired
};

export default Spacer;