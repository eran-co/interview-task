import React from 'react';
import editImage from '../media/edit.svg';


function EditButton() {
    return (
        <img className='edit-image cell-value' src={editImage} alt=""/>
    )
}

export default EditButton;
