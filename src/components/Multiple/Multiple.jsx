
import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
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
   `Submission Successful!\nFirst Name: ${formData.name}\nLast Name: ${formData.lastName}\nEmail Id: ${formData.emailID}\nMobile Number: ${formData.moblieNumber}`
  );
 };


 return (
    
  <form onSubmit={handleSubmit} className="multiple">
    <div>
        <h2>Employee Registration Form</h2>
   <label className="multiple__text" htmlFor="firstName">
   First Name:
   </label>
   <input
    type="text"
    id="firstName"
    className="multiple__input"
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
    minLength={"5"}
   /></div>
   <div>
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
   /></div>
   <div>
   <label className="multiple__text" htmlFor="emailID">
    Email ID:
   </label>
   <textarea
    id="emailID"
    className="multiple__textarea"
    name="emailID"
    value={formData.emailID}
    onChange={handleChange}
   /></div>
   <div>
   <label className="multiple__text" htmlFor="mobileNumber">
    Mobile Number:
   </label>
   <textarea
    id="mobileNumber"
    className="multiple__textarea"
    name="mobileNumber"
    value={formData.mobileNumber}
    onChange={handleChange}
   /></div>
   <Checkbox formData={formData} setFormData={setFormData}/>

   <button className="multiple__button" type="submit">
    Submit
   </button>
   <button className="multiple__button" type="reset">
    Reset
   </button>
  </form>
 );
}


