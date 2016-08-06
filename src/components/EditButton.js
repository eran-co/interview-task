import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import editImage from '../media/edit.svg';


function EditButton({ id }) {
    const link = "/voucher/" + id;
    return (
        <Link to={link}><img className='edit-image cell-value' src={editImage} alt=""/></Link>
    )
}
EditButton.propTypes = {
    id: PropTypes.string.isRequired
};

export default EditButton;
