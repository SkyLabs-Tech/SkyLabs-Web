// src/components/ContactUs.js

import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ textAlign: 'center', margin: '50px 0' }}>
      <h2>Contact Us</h2>
      
      {/* Embedded Google Form iframe */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSewDRrZdMvevL5hNFwHftSmUf_BlbLOFGhfrqlxpBrYkNxvJw/viewform?embedded=true" 
        width="640"
        height="856"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ContactUs;

