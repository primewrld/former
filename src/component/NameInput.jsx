import React from 'react';

import "../style/index.css"
const NameInput = ({ value, onChange }) =>{
    return (
        <input 
        type="text"
        placeholder="Name"
        value={value}
        onChange={onChange}
        />
    )
}

export default NameInput