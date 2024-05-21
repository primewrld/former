import React from "react";

import "../style/index.css"
const EmailInput = ({ value, onChange}) => {
    return ( <input type="email"
    placeholder="email"
    value={value}
    onChange={onChange}
    required
    />
);
};

export default EmailInput