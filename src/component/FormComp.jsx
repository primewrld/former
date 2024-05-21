import React, { useState } from "react";

import NameInput from "./NameInput";

import EmailInput from "./EmailInput";

import PhoneInput from "./Phoneinput";
import "../style/index.css";
const FormComp = () => {

  //initializing state with empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //updating state with vlue string
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //submitting the form
  const handleSubmit = () => {
    if (!name || !email || !phone) {
      alert("Please fill in all required fields");
      return;
    }else{
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  }
  };

  //returning the form
  return (
    <div className="form-container">
      <h1>Fill out the form</h1>
      <form action="">
        <NameInput value={name} onChange={handleNameChange} />
        <EmailInput value={email} onChange={handleEmailChange} />
        <PhoneInput value={phone} onChange={handlePhoneChange} />
        <button onClick = {handleSubmit}>Submit</button>
      </form>
      <a href="https://primewrld.github.io/linkme/" target="blank"><h5>code by primetech</h5></a>
    </div>
  );
};

export default FormComp;
