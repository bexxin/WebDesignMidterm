import React, { useState } from "react";
import "./controlled.css";

export default function ControlledComponent() {
    //state to hold form values
 const [formInput, setInputValue] = useState({
   firstName:"",
   lastName:"",
   email: "",
   mobile:"",
 });

 //handle changes to state
 const handleChange = (event) => {
  setInputValue(event.target.value);
 };
 //return component object
 return (
  <form>
   <label>
    Input Value:
    <input type="text" value={inputValue} onChange={handleChange} />
   </label>
   <p className="controlled__text">First Name: {inputValue}</p>
  </form>
 );
}
