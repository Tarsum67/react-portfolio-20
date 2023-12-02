import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMePage(){
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
    
}