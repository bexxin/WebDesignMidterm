
import React, { useState } from "react";
import "./multiple.css";
export default function Multiple() {
 const [formData, setFormData] = useState({
  firstName: "",
  lastName:"",
  emailID: "",
  moblieNumber: "",
  qualifications:{
    highSchool: false,
    higherSchool: false,
    graduation:false,
    postGrad:false,
    other:false

  }
 });

//handle state change
 const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
 };

//handle state changes for submit
 const handleSubmit = (event) => {
  event.preventDefault();
  alert(
   `First Name: ${formData.name}, Last Name: ${formData.lastName}, Email Id: ${formData.emailID}, Mobile Number: ${formData.moblieNumber}`
  );
 };


 return (
  <form onSubmit={handleSubmit} className="multiple">
   <label className="multiple__text" htmlFor="firstName">
   First Name:
   </label>
   <input
    type="text"
    id="firstName"
    className="multiple__input"
    name="name"
    value={formData.firstName}
    onChange={handleChange}
   />
   <label className="multiple__text" htmlFor="lastName">
    Last Name:
   </label>
   <input
    type="text"
    id="lastName"
    className="multiple__input"
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
   />
   <label className="multiple__text" htmlFor="emailID">
    Email ID
   </label>
   <textarea
    id="emailID"
    className="multiple__textarea"
    name="emailID"
    value={formData.emailID}
    onChange={handleChange}
   />
   <button className="multiple__button" type="submit">
    Submit
   </button>
   <button className="multiple__button" type="reset">
    Reset
   </button>
  </form>
 );
}


