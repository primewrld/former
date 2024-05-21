import React from "react";

import "../style/index.css";
const PhoneInput = ({ value, onChange }) => {
  return (
    <input
      type="tel"
      placeholder="Phone Number"
      value={value}
      onChange={onChange}
      
    />
  );
};

export default PhoneInput;
