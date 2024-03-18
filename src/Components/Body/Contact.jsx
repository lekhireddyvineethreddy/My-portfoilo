import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-message">Let's talk about working together!...</p>
      <div className="contact-options">
        <a href="tel:+919515471570" className="contact-link">Book a Call</a>
        <a href='mailto:lekhireddyvineeth@gmail.com' className="contact-link">Email</a>
        <a href="https://wa.me/+919515471570" className="contact-link">DM Me</a>
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
