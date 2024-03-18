import React, { useState } from 'react';
import './Contact.css'; 
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://my-portfoilo-bcf99-default-rtdb.firebaseio.com/contacts.json', formData);
      
      // Clear the form fields after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Set submission status to indicate success
      setSubmissionStatus('success');

      // Show success alert
      alert('Your message has been successfully submitted!');
    } catch (error) {
      // Set submission status to indicate failure
      setSubmissionStatus('error');

      // Show error alert
      alert('Oops! Something went wrong. Please try again later.');
      console.error('Error submitting data to Firebase:', error);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-message">Let's talk about working together!...</p>
      <div className="contact-options">
        <a href="tel:+919515471570" className="contact-link">Book a Call</a>
        <a href='mailto:lekhireddyvineeth@gmail.com' className="contact-link">Email</a>
        <a href="https://wa.me/+919515471570" className="contact-link">DM Me</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required maxLength="50" placeholder="Your name" className="contact-input" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required maxLength="50" placeholder="Your email" className="contact-input" />
        </div>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required maxLength="500" className="contact-textarea"></textarea>
        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
