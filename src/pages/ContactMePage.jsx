import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/UI/Footer';
export default function ContactMePage() {
  const form = useRef()
  // State to manage form input values
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage error flags for each input field
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  // Event handler for input changes
  const handleChange = (e) => {
    // Update input state with the new value
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Event handler for onBlur (when the input field loses focus)
  const handleBlur = () => {
    // Check if the 'name' field is empty and set the error flag accordingly
    if (!input.name) {
      setNameErr(true);
    }

    // Check if the 'email' field is empty and set/clear the error flag accordingly
    if (!input.email) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    // Check if the 'message' field is empty and set the error flag accordingly
    if (!input.message) {
      setMessageErr(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rhf4mpo', 'template_va5xq6p', form.current, 'oReJ6sX-h4G2hS1dM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setInput({
        name: '',
        email: '',
        message: '',
      });
  };

  return (
    <div>
        <div className='contact-section bg-dark text-white container-fluid'>

      
    <div className='form-container bg-dark text-white container-fluid'>
      <h2 className='text-center'>Contact Me</h2>
      {/* Form element */}
      <form ref={form} className="container d-flex flex-column" onSubmit={sendEmail}>
        {/* Name input field */}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control input-cstm"
          value={input.name}
          onChange={handleChange}
        ></input>
        {/* Display error message if 'nameErr' is true */}
        <p>{nameErr ? 'please fill out name' : ''}</p>

        {/* Email input field */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control input-cstm"
          value={input.email}
          onBlur={handleBlur}
          onChange={handleChange}
        ></input>
        {/* Display error message if 'emailErr' is true */}
        <p>{emailErr ? 'please fill out email' : ''}</p>

        {/* Message textarea */}
        <textarea
          name="message" 
          className='form-control input-cstm'
          placeholder="Message"
          id="" 
          cols="30" 
          rows="10"
          value={input.message}
          onChange={handleChange}
        ></textarea>
        {/* Display error message if 'messageErr' is true */}
        <p>{messageErr ? 'please fill out message' : ''}</p>

        {/* Submit button */}
        <button type='submit' className='btn btn-primary input-cstm'>
          Submit
        </button>
      </form>
    </div>
    </div>
    <Footer/>
    </div>
  );
}
