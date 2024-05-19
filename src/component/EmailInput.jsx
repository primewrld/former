
import React from "react";
import "../style/index.css"
const EmailInput = ({ value, onChange}) => {
    return ( <input type="text"
    placeholder="email"
    value={value}
    onChange={onChange}
    />
);
};

export default EmailInput