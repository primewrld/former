import React, { useState } from "react";

import NameInput from "./NameInput";

import EmailInput from "./EmailInput";

import PhoneInput from "./Phoneinput";
import "../style/index.css"
const FormComp = () => {
  const [name, setName] = useState("primewrld");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      alert("Please fill in all required fields");
      return;
    }
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  return (
    <div className="form-container">
        <h1>Fill out the form</h1>
        <form action="">
      <NameInput value={name} onChange={handleNameChange} />
      <EmailInput value={email} onChange={handleEmailChange} />
      <PhoneInput value={phone} onChange={handlePhoneChange} />
      <button>{onclick=handleSubmit}Submit</button></form>
      <h5>code by primetech</h5>
    </div>
  );
};

export default FormComp;
