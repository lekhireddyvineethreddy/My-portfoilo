import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-message">Let's talk about working together!</p>
      <div className="contact-options">
        <a href="tel:+919515471570" className="contact-link">Book a Call</a>
        <a href='mailto:lekhireddyvineeth@gmail.com' className="contact-link">Email</a>
        <a href="https://wa.me/+919515471570" className="contact-link">DM Me</a>
      </div>
      <div className="contact-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <path d="M12 5a1 1 0 0 0-1 1v5.001H7a1 1 0 0 0 0 2h4v5.001a1 1 0 0 0 2 0v-5h4a1 1 0 0 0 0-2h-4V6a1 1 0 0 0-1-1z"></path>
          <path d="M12 2a10 10 0 0 0-9.95 9.556L2 12a10 10 0 1 0 20 0l-.05-.444A10 10 0 0 0 12 2zM2 13.556a8 8 0 1 1 16 0v.888h-.001L18 14a6 6 0 1 0-12 0l.001.444H2v-.888zm10 3.235a1 1 0 0 0-1 1v5.413l-2.35-1.568a1 1 0 0 0-1.3.164l-.93 1.395a1 1 0 0 0 .164 1.3l3.28 2.187a1 1 0 0 0 1.134 0l3.28-2.187a1 1 0 0 0 .164-1.3l-.93-1.395a1 1 0 0 0-1.3-.164L12 23.204v-5.413a1 1 0 0 0-1-1z"></path>
        </svg>
      </div>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" required maxLength="50" placeholder="Your name" className="contact-input" />
          <input type="email" required maxLength="50" placeholder="Your email" className="contact-input" />
        </div>
        <textarea name="message" placeholder="Your message" required maxLength="500" className="contact-textarea"></textarea>
        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
